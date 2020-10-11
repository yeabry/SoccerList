import { 
    addNewPlayer, 
    getPlayers, 
    getPlayerWithID,
    updatePlayer,
    deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET Endpoint
        .get(getPlayers)

    // POST Endpoint
        .post(addNewPlayer);


    app.route('/player/:PlayerID')
    // GET Specific Player
        .get(getPlayerWithID)
    // Update Specific Player
        .put(updatePlayer)
    // Delete Specific Player
        .delete(deletePlayer);
}

export default routes;
