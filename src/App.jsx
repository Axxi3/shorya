import './App.css';
import Card from './assets/Card';
import SocialBadge from './assets/SocialLinks';
import link from './assets/link.png';
import you from './assets/youtube.png';
import email from './assets/email.jpg';
import whatsapp from './assets/whatspp.png';
import logo from './assets/logo.png';

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-auto min-h-[100vh] items-center justify-start mt-8 px-4">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1
            className="text-[28px] md:text-[36px] lg:text-[43px] font-medium text-transparent bg-clip-text mb-[-10px]"
            style={{
              backgroundImage: "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(140, 140, 140) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I help cool people,
          </h1>

          <h1
            className="text-[28px] md:text-[36px] lg:text-[43px] font-medium text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(140, 140, 140) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            grow their business.
          </h1>
        </div>

        {/* Social Badge Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <SocialBadge img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/225px-Instagram_logo_2022.svg.png" name="@shouryathour" link={"https://www.instagram.com/shouryathour"}/>
          <SocialBadge img={link} name="@shouryathour" link={"https://www.linkedin.com/in/shouryathour"}/>
          <SocialBadge img={you} name="@shouryathour" link={"https://shouryathour.beehiiv.com/subscribe"}/>
        </div>

        {/* Card Section */}
        <div className="flex flex-col gap-3 mt-12  ">

        <Card
            img={email}
            head="E-mail list"
            sub="Receive emails with valuable knowledge templates and more"
            text="Sign Up"
            link={"https://shouryathour.beehiiv.com/subscribe"}
          />
        <Card
            img={whatsapp}
            head="Whatsapp community"
            sub="Connect with me directly on my community"
            text="Join Now"
            link="https://chat.whatsapp.com/IHGKuI1v716AMe9HVnxiDb"
          />
         
         
          <Card
            img={logo}
            head="Our Website"
            sub="See our website in action"
            text="Visit Now"
            link={"https://buzzspear.com/"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
