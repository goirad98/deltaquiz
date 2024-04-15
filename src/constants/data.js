/*
    {
        text: '',
        answers: {
            A: '',
            B: '',
            C: '',
        }
    }
*/

import ACCEL_AVATAR from './pictures/accel.jpg'
import ASAMI_AVATAR from './pictures/asami.jpg'
import CHITO_AVATAR from './pictures/chito.jpg'
import DANITO_AVATAR from './pictures/danito.jpg'
import GAEN_AVATAR from './pictures/gaen.jpg'
import GOBO_AVATAR from './pictures/gobo.jpg'
import GOIRAD_AVATAR from './pictures/goirad.jpg'
import HARUKA_AVATAR from './pictures/haruka.jpg'
import ISMAEL_AVATAR from './pictures/ismael.jpg'
import JAM_AVATAR from './pictures/jam.jpg'
import JEHU_AVATAR from './pictures/jehu.jpg'
import KAIZA_AVATAR from './pictures/kaiza.jpg'
import KAT_AVATAR from './pictures/kat.jpg'
import LERY_AVATAR from './pictures/lery.jpg'
import NETAROS_AVATAR from './pictures/netaros.jpg'
import RAY_AVATAR from './pictures/ray.jpg'
import XYGE_AVATAR from './pictures/xyge.jpg'
import YAKKARI_AVATAR from './pictures/yakkari.jpg'

const QUESTIONS = [
    {
        text: '¿Qué tan weeb eres?',
        answers: [
            'Veo algo de anime de vez en cuando, pero no consumo mucha media japonesa más allá de eso',
            'Veo varios animes de temporada a la vez, pero no consumo mucha media japonesa más allá de eso',
            'Veo mucho anime y/o consumo bastante media japonesa como vtubers o gachas',
        ]
    },
    {
        text: '¿Qué tan cinéfilo eres?',
        answers: [
            'No veo casi pelis con regularidad y no tengo una cuenta activa en LB',
            'Veo algunas pelis de vez en cuando/tengo una cuenta algo activa en LB',
            'Veo bastantes pelis y tengo una cuenta bastante activa en LB',
        ]
    },
    {
        text: '¿Qué tan horny eres?',
        answers: [
            'No suelo participar en discusiones sobre parejas o sexo, y no me interesa el tema',
            'Participo a veces en discusiones sobre parejas o sexo, pero de manera seria y/o impersonal',
            'Siempre participo en discusiones sobre parejas o sexo y asumo un papel principal en ellas/suelo decir algunas cosas locas',
        ]
    },
    {
        text: '¿Qué tan geek eres?',
        answers: [
            'Apenas se prender mi pc y mi móvil',
            'Se lo basico para ayudarme con mis otros objetivos como el trabajo o los jueguitos',
            'Me apasiona la tecnología en sí y suelo hablar de ello en el chat',
        ]
    },
    {
        text: '¿Qué tan gamer eres?',
        answers: [
            'Casi no juego videojuegos en pc o consola',
            'Juego algunos títulos pero no es de mis hobbies principales',
            'Juego tanto como mi tiempo y mi bolsillo me lo permiten/suelo hablar bastante de ello en el chat',
        ]
    },
    {
        text: '¿Qué tan doomer eres?',
        answers: [
            'No suelo quejarme de mis problemas en el chat/no estoy tan mal',
            'Suelo comentar algunos de mis problemas en el chat/estoy bastante mal incluso si no hablo mucho al respecto',
            'Suelo andar llorando en el chat de lo terrible que me van las cosas/soy medio suicida',
        ]
    }
]

/*
const MEMBERS = [
    { name: 'Danito', answers: [0, 2, 2, 2, 0, 2], picture: DANITO_AVATAR },
    { name: 'Accel', answers: [2, 0, 0, 2, 1, 1], picture: ACCEL_AVATAR },
    { name: 'Netaros', answers: [0, 0, 1, 0, 2, 0], picture: NETAROS_AVATAR },
    { name: 'Ray', answers: [2, 2, 1, 2, 1, 0], picture: RAY_AVATAR },
    { name: 'Goirad', answers: [0, 0, 1, 1, 1, 2], picture: GOIRAD_AVATAR },
    { name: 'Kaiza', answers: [1, 0, 1, 2, 2, 0], picture: KAIZA_AVATAR },
    { name: 'Xyge', answers: [2, 0, 1, 0, 2, 0], picture: XYGE_AVATAR },
    { name: 'Yakkari', answers: [0, 2, 0, 1, 1, 2], picture: YAKKARI_AVATAR },
    { name: 'Lery', answers: [2, 2, 2, 0, 1, 2], picture: LERY_AVATAR },
    { name: 'Ismael', answers: [2, 2, 0, 0, 0, 0], picture: ISMAEL_AVATAR },
    { name: 'Jam', answers: [1, 1, 1, 0, 2, 1], picture: JAM_AVATAR },
    { name: 'Jehu', answers: [0 ,0 ,0 ,0 ,0, 2], picture: JEHU_AVATAR },
    { name: 'Gobo', answers: [0, 0, 0, 0, 2, 0], picture: GOBO_AVATAR },
    { name: 'Haruka', answers: [2, 2, 0, 0, 0, 0], picture: HARUKA_AVATAR },
    { name: 'Gaen', answers: [2, 0, 0, 0, 0, 2], picture: GAEN_AVATAR },
    { name: 'Asami', answers: [2, 0, 2, 0, 2, 0], picture: ASAMI_AVATAR },
    { name: 'Chito', answers: [2, 0, 1, 0, 2, 2], picture: CHITO_AVATAR },
    { name: 'Kat', answers: [0, 2, 0, 1, 0, 2], picture: KAT_AVATAR },
]
*/

const MEMBERS = [
    { answers: [0, 2, 2, 2, 0, 2], name: 'Danito', picture: DANITO_AVATAR },
    { answers: [2, 0, 0, 2, 1, 1], name: 'Accel', picture: ACCEL_AVATAR },
    { answers: [0, 0, 1, 0, 2, 0], name: 'Netaros', picture: NETAROS_AVATAR },
    { answers: [2, 2, 1, 2, 1, 0], name: 'Ray', picture: RAY_AVATAR },
    { answers: [0, 0, 1, 1, 1, 2], name: 'Goirad', picture: GOIRAD_AVATAR },
    { answers: [1, 0, 1, 2, 2, 0], name: 'Kaiza', picture: KAIZA_AVATAR },
    { answers: [2, 0, 1, 0, 2, 0], name: 'Xyge', picture: XYGE_AVATAR },
    { answers: [2, 0, 2, 1, 1, 2], name: 'Yakkari', picture: YAKKARI_AVATAR },
    { answers: [2, 2, 2, 0, 1, 2], name: 'Lery', picture: LERY_AVATAR },
    { answers: [2, 2, 0, 0, 0, 0], name: 'Ismael', picture: ISMAEL_AVATAR },
    { answers: [1, 1, 1, 0, 2, 1], name: 'Jam', picture: JAM_AVATAR },
    { answers: [0, 0, 0, 0, 0, 2], name: 'Jehu', picture: JEHU_AVATAR },
    { answers: [0, 0, 0, 0, 2, 0], name: 'Gobo', picture: GOBO_AVATAR },
    { answers: [2, 2, 0, 0, 0, 0], name: 'Haruka', picture: HARUKA_AVATAR },
    { answers: [2, 0, 0, 0, 0, 2], name: 'Gaen', picture: GAEN_AVATAR },
    { answers: [2, 0, 2, 0, 2, 0], name: 'Asami', picture: ASAMI_AVATAR },
    { answers: [2, 0, 1, 0, 2, 2], name: 'Chito', picture: CHITO_AVATAR },
    { answers: [0, 2, 0, 1, 0, 2], name: 'Kat', picture: KAT_AVATAR },
]

const VERSION = 'VER. 2024-04-15 11:50'

export { QUESTIONS, MEMBERS, VERSION }