import { Router } from "express";
import { createTeam, getOneTeam, getTeams } from "../controller/teams.controller";
import { verifyToken } from "../middleware/verifyToken";

const teamsRouter = Router()

teamsRouter.post('/create', createTeam)
teamsRouter.get('/', verifyToken, getTeams)
teamsRouter.get('/:team_ID', getOneTeam)

export default teamsRouter