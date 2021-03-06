import React, {useState, useEffect, useContext} from "react";
import InputMessage from "./InputMessage";
import MessageList, {IMessage} from "./MessageList";
import {SettingsContext} from "../Contexts/settings";

const Chat = ({ activeChat = ''}: {activeChat: string}) => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [botTriggered, setBotTriggered] = useState<boolean>(false);
    const { name } = useContext(SettingsContext);
    const timeout = 2000;
    const currentSender = (name) ? name : 'sender_author';

    const addMessage = (msg: IMessage) => {
        setMessages(prevMessages => [...prevMessages, msg]);
        setBotTriggered(true);
    }

    useEffect(() => {
        if (botTriggered && messages.length > 0) {
            const debouncedEvent = setTimeout(() => addMessage({sender: 'sender_bot', text: 'azazaza'}), timeout);
            setBotTriggered(false);
            return () => clearTimeout(debouncedEvent);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages, timeout]);

    useEffect(() => {
        setMessages([]);
    }, [activeChat])

    return (
        <div className='h-100'>
            <div className='h-75'>
                <div>Active chat ID = {activeChat}</div>
                <MessageList currentSender={currentSender} messages={messages}/>
            </div>
            <div className='h-25 text-center'>
                <InputMessage onSend={text => (addMessage({sender: currentSender, text}))}/>
            </div>
        </div>
    );
}

export default Chat;
