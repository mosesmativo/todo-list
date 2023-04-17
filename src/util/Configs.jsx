import { TodoistApi } from "@doist/todoist-api-typescript";

export const Config = {
    headers: {
        'Authorization': 'Bearer 55c63d4af64afc2b071408c43b92bfe0ffaad810',
        'Content-Type': 'application/x-www-form-urlencoded',

    },
};

export const api = new TodoistApi("55c63d4af64afc2b071408c43b92bfe0ffaad810");
