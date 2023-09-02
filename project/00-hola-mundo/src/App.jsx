import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`;
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName ={formatUserName} userName="Juanjo_XIV" name="Juanjo Developer"/>
            <TwitterFollowCard formatUserName ={formatUserName} userName="midudev" name="Miguel Angel Duran"/>
      </section>
    );
}

