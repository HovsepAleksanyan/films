import { Images } from "../../assets/Images";
import { DELETE_ALL_FILMS, UPDATE_FILMS } from "./films.actions";

const initialState = {
    filmsList: [
        {
            id: `${Math.random()}`,
            image: Images.PeacefulWarrior,
            title: "Peaceful Warrior",
            year: "2006",
            genre: "drama, melodrama",
            link: "https://gidonline.io/title/mirnyj-voin/",
            comments: [
                {
                    id:`${Math.random()}`,
                    text:"What a wonderful film)"
                },
                {
                    id:`${Math.random()}`,
                    text:"I have read the book!"
                }
            ]
        },
        {
            id: `${Math.random()}`,
            image: Images.TheImitationGame,
            title: "The imitation game",
            year: "2014",
            genre: "biography, military, drama",
            link: "https://gidonline.io/title/igra-v-imitaciyu/",
            comments: [
                {
                    id:`${Math.random()}`,
                    text:"What a wonderful film)"
                },
                {
                    id:`${Math.random()}`,
                    text:"Very interesting film."
                }
            ]
        },
        {
            id: `${Math.random()}`,
            image: Images.Lamborghini,
            title: "Lamborghini: The Man Behind the Legend",
            year: "2022",
            genre: "biography, drama",
            link: "https://gidonline.io/title/lamborgini-chelovek-legenda/",
            comments: [
                {
                    id:`${Math.random()}`,
                    text:"What a wonderful film)"
                },
                {
                    id:`${Math.random()}`,
                    text:"I love Lamborghini cars!"
                }
            ]
        },
        {
            id: `${Math.random()}`,
            image: Images.Whiplash,
            title: "Whiplash",
            year: "2014",
            genre: "arthouse, drama, music, thriller",
            link: "https://gidonline.io/title/oderzhimost-2014/",
            comments: [
                {
                    id:`${Math.random()}`,
                    text:"What a wonderful film)"
                },
                {
                    id:`${Math.random()}`,
                    text:"Good actor playing!"
                }
            ]
        },
        {
            id: `${Math.random()}`,
            image: Images.TheFounder,
            title: "The Founder",
            year: "2016",
            genre: "drama, biograpghy",
            link: "https://gidonline.io/title/osnovatel/",
            comments: []
        },
        {
            id: `${Math.random()}`,
            image: Images.TheSocialNetwork,
            title: "The Social Network",
            year: "2016",
            genre: "drama, biograpghy",
            link: "https://gidonline.io/title/socialnaya-set/",
            comments: [
                {
                    id:`${Math.random()}`,
                    text:"What a wonderful film)"
                }
            ]
        },
        {
            id: `${Math.random()}`,
            image: Images.PussInBoots,
            title: "Puss in Boots",
            year: "2022",
            genre: "comedy, cartoon, adventures",
            link: "https://gidonline.io/title/kot-v-sapogax-2-poslednee-zhelanie/",
            comments: [
                {
                    id:`${Math.random()}`,
                    text:"What a wonderful film)"
                }
            ]
        },
        {
            id: `${Math.random()}`,
            image: Images.KungFuPanda,
            title: "Kung-Fu Panda",
            year: "2008",
            genre: "comedy, cartoon, adventures, action, family",
            link: "https://gidonline.io/title/kung-fu-panda/",
            comments: [
                {
                    id:`${Math.random()}`,
                    text:"What a wonderful film)"
                },
                {
                    id:`${Math.random()}`,
                    text:"My favorite animation film"
                }
            ]
        },
        {
            id: `${Math.random()}`,
            image: Images.WallE,
            title: "WALL-E",
            year: "2008",
            genre: "cartoon",
            link: "https://gidonline.io/title/vall-i/",
            comments: [
                {
                    id:`${Math.random()}`,
                    text:"What a wonderful film)"
                }
            ]
        }
    ]
};

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_ALL_FILMS:
            return {
                ...state,
                filmsList: []
            }

        case UPDATE_FILMS:
            return {
                ...state,
                filmsList: action.payload
            }

        default:
            return state
    }
}