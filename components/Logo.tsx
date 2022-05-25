type Props = {
  out: boolean;
};

const Logo = ({ out }: Props) => {
  return (
    <>
      <style jsx>{`
        .logo {
          position: fixed;
          right: 10px;
          bottom: 10px;
          width: 200px;
          max-width: 25%;
          opacity: ${out ? 0 : 1};

          transition: all 0.5s ease-in-out 0.1s;
        }
      `}</style>

      <img src="/logo.png" className={"logo"} alt="Makerspace Logo" />
    </>
  );
};

export default Logo;
