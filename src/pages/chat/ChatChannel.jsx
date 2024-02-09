import React, {useState, useEffect} from 'react'
import { BsSendFill } from "react-icons/bs";

const ChatChannel = ({chatId}) => {
  const [message, setMessage] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("/data.json");
            const data = await response.json();
            setMessage(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
  }, []);

  const itemWithchatId = message.find(item => item.id === chatId);

  return (
    <div className="w-3/4 bg-gray border-2 border-white ">

      {/* TOP TAB */}
      <div className="h-18 shadow-md p-2 flex flex-col justify-center">
        <h1 className="title">{itemWithchatId?.title}</h1>
        <p className="text-blue1 h-6 overflow-hidden text-sm">
        {itemWithchatId?.despriction}
        </p>
      </div>

      {/* MESSAGE */}
      <div className="h-3/4 overflow-hidden overflow-y-scroll" >
      {/* chat-start */}
      <div className="chat chat-start pt-4  overflow-hidden">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
      </div>

      {/* chat-end */}
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      <div className="chat chat-end">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* Username and time */}
        <div className="chat-header">
        Obi-Wan Kenobi
        </div>
        {/* Message */}
        <div className="chat-bubble bg-fa1">It was you who would bring balance to the Force</div>
      </div>
      </div>
      
      
      




































      {/* BOX INPUT MESSAGE */}
      <div className="flex justify-center items-center">
      <input type="text" className='absolute bottom-5 bg-white w-3/5 p-2 rounded-md outline-none '/>
      <button className=""><BsSendFill  className='absolute bottom-8 right-14 ' /></button>
      </div>
      
    </div>
  )
}

export default ChatChannel
