import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        username: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        username: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        username: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        username: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({ username, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={username}
                        username={username}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}