import { footerJson } from "../utils/JSON";

function Footer() {
  return (
    <footer className="global_container top_container">
      <div className="flex flex-row justify-evenly">
        {footerJson.map((items, i) => {
          const { heading, options } = items;
          return (
            <div key={i}>
              <h1>{heading}</h1>
              {options.map((items, i) => {
                const { name } = items;
                return (
                  <div key={i}>
                    <h3>{name}</h3>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
