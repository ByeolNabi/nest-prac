import { BoardsService } from './boards.service';
import { Board } from './board.model';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    getAllBoard(): Board[];
}
