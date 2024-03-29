module.exports = {
    SOCKET: {
        EVENTS: {
            CONNECTION: "connection",
            DISCONNECT: "disconnect",
            MESSAGE: "message",
            CONVERSATION_LIST: "conversation-list",
            ERROR: "error"
        },
        ERROR_TYPE: {
            USER_ALREADY_EXIST: "user-exist-error",
            UNKNOWN_ERROR: "unknown-error",
            NAME_IS_REQUIRED: "name-required",
            SEND_MESSAGE_ERROR: "message-error",
            READ_SESSION_ERROR: "read-session-error",
            DISCONNECTION_ERROR: "disconnect-error",
            CONVERSATION_LIST_ERROR: "get-conversation-list-error"
        },
    },
    DATABASE: {
        TABLES_NAMES : {
            USER : "User",
            DEPARTMENT : "Department",
            CHAT : "Chat",
            CONVERSATION : "Conversation",
            PARTICIPANT : "Participant"
        },
        TABLE_ATTRIBUTES: {
            COMMON: {
                ID: "id",
                CREATED_AT: "created_at",
                UPDATED_AT: "updated_at",
            },
            USER: {
                FIRST_NAME: "first_name",
                LAST_NAME: "last_name",
                EMAIL: "email",
                DEPARTMENT_ID: "department_id",
                PASSWORD: "password",
            },
            DEPARTMENT: {
                DEPARTMENT_NAME: "department_name",
            },
            CHAT: {
                CONTENT: "content",
                SENDER_ID: "sender_id",
                CONVERSATION_ID: "conversation_id"
            },
            CONVERSATION: {
                CONVERSATION_NAME: "conversation_name",
                DESCRIPTION: "description",
                CONVERSATION_CREATOR_ID: "conversation_creator_id"
            },
            PARTICIPANT: {
                USER_ID: "user_id",
                CONVERSATION_ID: "conversation_id"
            }
        },
        CONNECTION_REF: {
            CREATOR: "creator",
            CHATS: "chats",
            CONVERSATIONS: "conversations",
            SENDER: "sender",
            USERS: "users",
            PARTICIPANTS: "participants",
            DEPARTMENT : "department"
        }
    }
}