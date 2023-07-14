import { toPng } from "html-to-image";
// adds the language function to look up the corresponding language
// all Text elements are saved in sImpExp.js (_s.sImpExp.KeyToText)
import _s from '../lang/lang.js'

export class ImportExport {
  constructor(presenter, domRoot) {
    this.presenter = presenter;
    this.domRoot = domRoot;
    this.printHeight = 32;

    this.preRender();
  }

  render(model) {}

  preRender() {
    const importDiv = document.createElement("div");
    importDiv.classList.add(
      "options-element",
      "uploadIcon",
      "tooltip",
      "tooltip-bottom",
      "hand"
    );
    importDiv.setAttribute("data-tooltip", _s.sImpExp.load);
    const importInput = document.createElement("input");
    importInput.setAttribute("type", "file");
    importInput.addEventListener("change", (e) => this.presenter.readFile(e));
    importDiv.addEventListener("click", () => importInput.click());
    const webdriverImportInput = document.createElement("input");
    webdriverImportInput.classList.add("webdriver-input");
    webdriverImportInput.setAttribute("type", "file");
    webdriverImportInput.addEventListener("change", (e) =>
      this.presenter.readFile(e)
    );
    webdriverImportInput.style.display = "none";
    document.getElementById("optionButtons").appendChild(webdriverImportInput);
    document.getElementById("optionButtons").appendChild(importDiv);

    const saveDiv = document.createElement("div");
    saveDiv.classList.add(
      "options-element",
      "saveIcon",
      "tooltip",
      "tooltip-bottom",
      "hand"
    );
    saveDiv.setAttribute("data-tooltip", _s.sImpExp.save);
    saveDiv.addEventListener("click", () => this.presenter.saveDialog());
    document.getElementById("optionButtons").appendChild(saveDiv);

    // right now only png export exists, in the future a dialog should be opened
    const exportDiv = document.createElement("div");
    exportDiv.classList.add(
      "options-element",
      "exportIcon",
      "tooltip",
      "tooltip-bottom",
      "hand"
    );
    exportDiv.setAttribute("data-tooltip", _s.sImpExp.imageExport);
    exportDiv.addEventListener("click", () =>
      this.exportAsPng(this.presenter.getModelTree())
    );
    document.getElementById("optionButtons").appendChild(exportDiv);
  }

  /**
   * Create a PNG file of the current model and append a button for downloading
   */
  async exportAsPng() {
    const node = document.getElementById("structogram");

    // The background svg images are not loaded on the first render.
    // We render the image multiple times to be "sure" that they will be loaded and included in the final image.
    // See https://github.com/bubkoo/html-to-image/issues/361
    await toPng(node);
    await toPng(node);
    await toPng(node);
    await toPng(
      node,
      {
        filter: function (node) {
          if (node.classList) {
            return !node.classList.contains("optionContainer");
          } else {
            return true;
          }
        },
        pixelRatio: 2
      }
    ).then(function (dataURL) {
      // define filename

      const exportFileDefaultName =
        "struktog_" + new Date(Date.now()).toJSON().substring(0, 10) + ".png";

      // create button / anker element
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", dataURL);
      linkElement.setAttribute("download", exportFileDefaultName);
      linkElement.click();
    });
  }

  resetButtons() {}
  displaySourcecode() {}
  setLang() {}
}
