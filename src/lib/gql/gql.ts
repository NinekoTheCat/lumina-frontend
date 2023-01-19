/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n        query gct($password:String!) {\n            crackTime(password: $password) {\n                seconds\n                guesses\n                string\n            }\n        }": types.GctDocument,
    "\n   query usercount {\n    userCount\n   }": types.UsercountDocument,
    "\n    query me {\n        me {\n          id\n          email\n          firstName\n          lastName\n          roles\n          referrals\n          citizenshipStatus\n        }\n      }": types.MeDocument,
    "\n    mutation login($user: LoginUserInput!) {\n        login(loginUser: $user)\n    }": types.LoginDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query gct($password:String!) {\n            crackTime(password: $password) {\n                seconds\n                guesses\n                string\n            }\n        }"): (typeof documents)["\n        query gct($password:String!) {\n            crackTime(password: $password) {\n                seconds\n                guesses\n                string\n            }\n        }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query usercount {\n    userCount\n   }"): (typeof documents)["\n   query usercount {\n    userCount\n   }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query me {\n        me {\n          id\n          email\n          firstName\n          lastName\n          roles\n          referrals\n          citizenshipStatus\n        }\n      }"): (typeof documents)["\n    query me {\n        me {\n          id\n          email\n          firstName\n          lastName\n          roles\n          referrals\n          citizenshipStatus\n        }\n      }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation login($user: LoginUserInput!) {\n        login(loginUser: $user)\n    }"): (typeof documents)["\n    mutation login($user: LoginUserInput!) {\n        login(loginUser: $user)\n    }"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;