import { TextBoxComponent } from "./componentes/caixaDeTexto.js";

document.body.innerHTML = `
${new TextBoxComponent({
    className: "control-3d",
    placeholder: "Digite seu nome",
    type: "text",
    label: "Nome:",
}).render()}

${new TextBoxComponent({
    className: "control-3d dark",
    placeholder: "Digite sua senha",
    type: "password",
    label: "Senha:",
}).render()}
`;