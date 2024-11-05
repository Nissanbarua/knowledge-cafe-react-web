import profile from '../../assets/profile.png'

const Header = () => {

  return (
    <div className="flex justify-between container mx-auto p-4 border-b-2">
      <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="Profile Pic " />
    </div>
  );
};

export default Header;
