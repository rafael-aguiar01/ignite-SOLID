import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params;
        const all = this.listAllUsersUseCase.execute({
            user_id: String(user_id),
        });

        return response.json(all);
    }
}

export { ListAllUsersController };

// let users;

// try {
//   users = this.listAllUsersUseCase.execute({ user_id: String(user_id) });
//   return response.status(202).json(users);
// } catch (error) {
//   return response.status(400).json({ error: error.message });
// }
// }
// }

// export { ListAllUsersController };
