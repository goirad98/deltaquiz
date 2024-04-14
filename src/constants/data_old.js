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

const questions = [
    {
        text: '¿Qué tan weeb eres?',
        answers: {
            A: 'Veo algo de anime de vez en cuando, pero no consumo mucha media japonesa más allá de eso',
            B: 'Veo varios animes de temporada a la vez, pero no consumo mucha media japonesa más allá de eso',
            C: 'Veo mucho anime y/o consumo bastante media japonesa como vtubers o gachas',
        }
    },
    {
        text: '¿Qué tan cinéfilo eres?',
        answers: {
            A: 'No veo casi pelis con regularidad y no tengo una cuenta activa en LB',
            B: 'Veo algunas pelis de vez en cuando/tengo una cuenta algo activa en LB',
            C: 'Veo bastantes pelis y tengo una cuenta bastante activa en LB',
        }
    },
    {
        text: '¿Qué tan horny eres?',
        answers: {
            A: 'No suelo participar en discusiones sobre parejas o sexo, y no me interesa el tema',
            B: 'Participo a veces en discusiones sobre parejas o sexo, pero de manera seria y/o impersonal',
            C: 'Siempre participo en discusiones sobre parejas o sexo y asumo un papel principal en ellas/suelo decir algunas cosas locas',
        }
    },
    {
        text: '¿Qué tan geek eres?',
        answers: {
            A: 'Apenas se prender mi pc y mi móvil',
            B: 'Se lo basico para ayudarme con mis otros objetivos como el trabajo o los jueguitos',
            C: 'Me apasiona la tecnología en sí y suelo hablar de ello en el chat',
        }
    },
    {
        text: '¿Qué tan gamer eres?',
        answers: {
            A: 'Casi no juego videojuegos en pc o consola',
            B: 'Juego algunos títulos pero no es de mis hobbies principales',
            C: 'Juego tanto como mi tiempo y mi bolsillo me lo permiten/suelo hablar bastante de ello en el chat',
        }
    },
    {
        text: '¿Qué tan doomer eres?',
        answers: {
            A: 'No suelo quejarme de mis problemas en el chat/no estoy tan mal',
            B: 'Suelo comentar algunos de mis problemas en el chat/estoy bastante mal incluso si no hablo mucho al respecto',
            C: 'Suelo andar llorando en el chat de lo terrible que me van las cosas/soy medio suicida',
        }
    }
]

const answers = {
    Danito: ['A', 'C', 'C', 'C', 'A', 'C'],
    Acce: ['C', 'A', 'A', 'C', 'B', 'B'],
    Net: ['A', 'A', 'B', 'A', 'C', 'A'],
    Ray: ['C', 'C', 'B', 'C', 'B', 'A'],
    Darío: ['A', 'A', 'B', 'B', 'B', 'C'],
    Jonathan: ['B', 'A', 'B', 'C', 'C', 'A'],
    Mass: ['C', 'A', 'B', 'A', 'C', 'A'],
    Ciela: ['A', 'C', 'A', 'B', 'B', 'C'],
    Lery: ['C', 'C', 'C', 'A', 'B', 'C'],
    Isma: ['C', 'C', 'A', 'A', 'A', 'A'],
    Jam: ['B', 'B', 'B', 'A', 'C', 'B'],
    Jehu: ['A' ,'A' ,'A' ,'A' ,'A', 'C'],
    Gobo: ['A', 'A', 'A', 'A', 'C', 'A'],
    Haruka: ['C', 'C', 'A', 'A', 'A', 'A'],
    Gaen: ['C', 'A', 'A', 'A', 'A', 'C'],
    Asami: ['C', 'A', 'C', 'A', 'C', 'A'],
    Chito: ['C', 'A', 'B', 'A', 'C', 'C'],
    Pupi: ['A', 'C', 'A', 'B', 'A', 'C'],
}

export { questions, answers }