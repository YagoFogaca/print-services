import * as C from "./index.menu.style";

export function Menu() {
  return (
    <>
      <C.Aside>
        <C.NavDesktop>
          <section className="section-img-logo">
            <img src="*" alt="Logo Print Services" />
          </section>

          <C.SectionMenuDesktop className="section-menu">
            <C.UlDesktop>
              <C.LiDesktop>
                <C.AMenu href="#home">
                  Home <C.LineAMenu></C.LineAMenu>
                </C.AMenu>
              </C.LiDesktop>

              <C.LiDesktop>
                <C.AMenu href="#services">
                  Serviços<C.LineAMenu></C.LineAMenu>
                </C.AMenu>
              </C.LiDesktop>

              <C.LiDesktop>
                <C.AMenu href="#portfolio">
                  Clientes<C.LineAMenu></C.LineAMenu>
                </C.AMenu>
              </C.LiDesktop>

              <C.LiDesktop>
                <C.AMenu href="#contact">
                  Contato <C.LineAMenu></C.LineAMenu>
                </C.AMenu>
              </C.LiDesktop>
            </C.UlDesktop>
          </C.SectionMenuDesktop>
        </C.NavDesktop>
      </C.Aside>
    </>
  );
}
