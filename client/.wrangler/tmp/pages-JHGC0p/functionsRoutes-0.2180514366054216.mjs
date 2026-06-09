import { onRequest as __api_add_to_leaderboard_js_onRequest } from "/home/bluebird/Projects/Onepiecedle-Discord-Bot/client/functions/api/add-to-leaderboard.js"
import { onRequest as __api_get_guesses_js_onRequest } from "/home/bluebird/Projects/Onepiecedle-Discord-Bot/client/functions/api/get-guesses.js"
import { onRequest as __api_get_player_js_onRequest } from "/home/bluebird/Projects/Onepiecedle-Discord-Bot/client/functions/api/get-player.js"
import { onRequest as __api_guess_js_onRequest } from "/home/bluebird/Projects/Onepiecedle-Discord-Bot/client/functions/api/guess.js"
import { onRequest as __api_send_msg_js_onRequest } from "/home/bluebird/Projects/Onepiecedle-Discord-Bot/client/functions/api/send-msg.js"
import { onRequest as __api_token_js_onRequest } from "/home/bluebird/Projects/Onepiecedle-Discord-Bot/client/functions/api/token.js"

export const routes = [
    {
      routePath: "/api/add-to-leaderboard",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_add_to_leaderboard_js_onRequest],
    },
  {
      routePath: "/api/get-guesses",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_get_guesses_js_onRequest],
    },
  {
      routePath: "/api/get-player",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_get_player_js_onRequest],
    },
  {
      routePath: "/api/guess",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_guess_js_onRequest],
    },
  {
      routePath: "/api/send-msg",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_send_msg_js_onRequest],
    },
  {
      routePath: "/api/token",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_token_js_onRequest],
    },
  ]