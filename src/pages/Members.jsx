import { MEMBERS } from '../constants/data'

const Members = () => {
    const members = MEMBERS.sort((a, b) => a.name > b.name ? 1 : -1)

    return (
        <div className='vh-100 container'>
            <div className='h-100 py-4 d-flex flex-column gap-4 justify-content-center align-items-center'>
                <h3>ACTUALES MIEMBROS</h3>
                <div className='w-100 d-flex flex-column gap-2 overflow-y-scroll'>
                    {
                        members.map((member, index) =>
                            <div key={index} className={`mx-2 member-card`}>
                                <div className='px-4 py-2 d-flex gap-3 align-items-center'>
                                    {member.picture && <img className='member-avatar-min' src={member.picture}/>}
                                    {member.name}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Members