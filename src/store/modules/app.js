import Cookies from "js-cookie";
import storage from "@/utils/storage";
import * as types from "../types";
const app ={
    state:{
        sidebar: {
            sliderState: storage.get("sliderState")
        }
    },
    mutations:{

    },
    actions:{

    }
}
export default app;