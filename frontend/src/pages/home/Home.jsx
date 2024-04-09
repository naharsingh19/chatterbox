import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
    <div className='flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar className="sm:w-full sm:h-1/4 md:w-1/4 md:h-full" />
      <MessageContainer className="sm:w-full sm:h-3/4 md:w-3/4 md:h-full" />
    </div>
  );
};
export default Home;
