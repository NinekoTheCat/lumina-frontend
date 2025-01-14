import { MeDocument, type MeQuery } from "$lib/graphql/graphql-types"
import type { AlertsStore } from "$lib/stores/alerts"
import type { GraphClient } from "$lib/stores/graphql"
import { MessageType } from "$lib/types/message"

export class InvalidTokenError extends Error {
    constructor() {
        super("InvalidTokenError")
    }
}

export async function get_me(graph: GraphClient, alerts: AlertsStore): Promise<MeQuery["me"] | null> {
    const { data, error  } = await graph.gquery(MeDocument, {})

    // find any errors that are related to invalid auth token
    if(error?.graphQLErrors.find(err => err?.extensions?.code === "INVALID_TOKEN") !== undefined) {
        alerts.create_alert(MessageType.Info, "Your session has expired. Please sign in again.")
        throw new InvalidTokenError()
    }

    if (error) {
        alerts.create_alert(MessageType.Error, error.message)
        return null
    }
    return data?.me ?? null
}