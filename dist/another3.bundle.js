(self["webpackChunksignscheduler"] = self["webpackChunksignscheduler"] || []).push([["another3"],{

/***/ "./UI/UIContainerType3.js":
/*!********************************!*\
  !*** ./UI/UIContainerType3.js ***!
  \********************************/
/***/ (() => {


class UIContainerType3 {
      #container;
      get container() {return this.#container;}

      #headingContainer;
      get headingContainer() {return this.#headingContainer;}

      #headingContainer_Height = 30;

      #headingText;
      get headingText() {return this.#headingText;}

      #popOutBtn;
      #popOutBtn_Width = 30;
      #popOutBtn_Height = 30;
      #popOutModal;
      #whenClosedReturnBorrowed = true;
      get whenClosedReturnBorrowed() {return this.#whenClosedReturnBorrowed;}
      set whenClosedReturnBorrowed(val) {
            this.#whenClosedReturnBorrowed = val;
            if(this.#popOutModal) this.#popOutModal.whenClosedReturnBorrowed = val;
      }

      #minimizeBtn;
      #minimizeBtn_Width = 30;
      #minimizeBtn_Height = 30;
      #isMinimized = false;

      #contentContainer;
      get contentContainer() {return this.#contentContainer;}

      constructor(overrideCssStyles, headingText, parentObjectToAppendTo) {
            this.#headingText = headingText;

            /**@Container */
            this.#container = document.createElement("div");
            this.#container.style = STYLE.Div3;
            this.#container.style.cssText += "display:flex;flex-direction:column;";
            this.#container.style.cssText += overrideCssStyles;
            if(parentObjectToAppendTo != null) {
                  parentObjectToAppendTo.appendChild(this.#container);
            }

            /**@HeadingContainer */
            this.#headingContainer = document.createElement("div");
            this.#headingContainer.style = "width:100%;height:" + this.#headingContainer_Height + "px;box-sizing:border-box;";
            this.#container.appendChild(this.#headingContainer);

            /**@HeadingText */
            if(headingText !== null) {
                  this.#headingText = document.createElement("h3");
                  this.#headingText.innerText = headingText;
                  this.#headingText.style = "float: left; height: 30px; margin: 0px 0px 0px 0px; background-color: " + COLOUR.DarkGrey + "; width: calc(100% - " + (this.#minimizeBtn_Width + this.#popOutBtn_Width) + "px); box-sizing: border-box; padding: 0px; font-size: 14px; color: white; text-align: center; line-height: 30px; border: 1px solid " + COLOUR.DarkGrey + ";";
                  this.#headingContainer.appendChild(this.#headingText);
            }

            /**@MinimizeBtn */
            this.#minimizeBtn = createButton("-", "display: block; float: right; width: " + this.#minimizeBtn_Width + "px;height:" + this.#minimizeBtn_Height + "px; border:none;padding:2px; color:white;min-height: 20px; margin: 0px 0px 0px 0px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;background-color:" + COLOUR.LightBlue + ";", () => {this.toggleMinimize();});
            this.#minimizeBtn.id = "minimizeBtn";
            this.#minimizeBtn.dataset.minimizedState = "maximized";
            this.#headingContainer.appendChild(this.#minimizeBtn);

            /**@PopOutBtn */
            this.#popOutBtn = createButton("\u274F", "display: block; float: right; width: " + this.#popOutBtn_Width + "px;height:" + this.#popOutBtn_Height + "px; border:none;padding:2px; color:white;min-height: 20px; margin: 0px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;background-color:" + COLOUR.DarkBlue + ";", () => {
                  setFieldDisabled(true, this.#popOutBtn);
                  this.onPopOut();
                  this.#popOutModal = new ModalPopOut("Expanded View", () => {
                        setFieldDisabled(false, this.#popOutBtn);
                        this.onPopOutLeave();
                        this.callbackOverridable();
                  }, this.#container);
                  this.#popOutModal.whenClosedReturnBorrowed = this.whenClosedReturnBorrowed;
            }, this.#headingContainer);

            /**@ContentContainer */
            this.#contentContainer = document.createElement("div");
            this.#contentContainer.style = "width:100%;max-height:calc(100% - 30px);overflow-y:scroll;display:block;position: relative;";
            this.#container.appendChild(this.#contentContainer);
      }

      toggleMinimize() {
            if(this.#contentContainer.style.display == "none") {
                  this.Maximize();
            } else {
                  this.Minimize();
            }
      }

      Minimize() {
            this.#isMinimized = true;
            this.#contentContainer.style.display = "none";
            this.#minimizeBtn.innerText = "▭";
            this.#minimizeBtn.dataset.minimizedState = "minimized";
      }

      Maximize() {
            this.#isMinimized = false;
            this.#contentContainer.style.display = "block";
            this.#minimizeBtn.innerText = "-";
            this.#minimizeBtn.dataset.minimizedState = "maximized";
      }

      onPopOut() {
            this.prePopOutState = this.#isMinimized;//true
            this.Maximize();
            this.#contentContainer.style.maxHeight = "100%";
            this.#container.style.maxHeight = "10000px";
      }

      onPopOutLeave() {
            //if was minimized before, restore to minimized
            if(this.prePopOutState == true) this.Minimize();
            else this.Maximize();
            this.#contentContainer.style.maxHeight = "400px";
            this.#container.style = STYLE.Div3;
      }

      /**@Overridable */
      callbackOverridable() {
            console.log("callbackOverridable");
      }

      #addedHeadingItems_combinedWidth = 0;
      addHeadingButtons(...itemContainers) {
            for(let i = 0; i < itemContainers.length; i++) {
                  this.#headingContainer.appendChild(itemContainers[i]);
                  this.#addedHeadingItems_combinedWidth += itemContainers[i].offsetWidth;
            }
            this.#headingText.style.width = "calc(100% - " + (this.#addedHeadingItems_combinedWidth + this.#minimizeBtn_Width + this.#popOutBtn_Width) + "px";
      }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./UI/UIContainerType3.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vdGhlcjMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsc0JBQXNCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELCtDQUErQyxzQkFBc0I7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGNBQWMseUJBQXlCLDJDQUEyQyxpRkFBaUYsd0JBQXdCLGNBQWMsaUJBQWlCLGNBQWMsb0JBQW9CLG1CQUFtQiwwQ0FBMEM7QUFDblg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsY0FBYyx5Q0FBeUMsMkNBQTJDLFlBQVksYUFBYSxZQUFZLGtCQUFrQix5QkFBeUIsK0NBQStDLDBDQUEwQyxVQUFVLHVCQUF1QjtBQUMvVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLGNBQWMsdUNBQXVDLHlDQUF5QyxZQUFZLGFBQWEsWUFBWSxrQkFBa0IsYUFBYSwrQ0FBK0MseUNBQXlDO0FBQ2hVO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsNkJBQTZCLGtCQUFrQixjQUFjLG1CQUFtQjtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lnbnNjaGVkdWxlci8uL1VJL1VJQ29udGFpbmVyVHlwZTMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIFVJQ29udGFpbmVyVHlwZTMge1xyXG4gICAgICAjY29udGFpbmVyO1xyXG4gICAgICBnZXQgY29udGFpbmVyKCkge3JldHVybiB0aGlzLiNjb250YWluZXI7fVxyXG5cclxuICAgICAgI2hlYWRpbmdDb250YWluZXI7XHJcbiAgICAgIGdldCBoZWFkaW5nQ29udGFpbmVyKCkge3JldHVybiB0aGlzLiNoZWFkaW5nQ29udGFpbmVyO31cclxuXHJcbiAgICAgICNoZWFkaW5nQ29udGFpbmVyX0hlaWdodCA9IDMwO1xyXG5cclxuICAgICAgI2hlYWRpbmdUZXh0O1xyXG4gICAgICBnZXQgaGVhZGluZ1RleHQoKSB7cmV0dXJuIHRoaXMuI2hlYWRpbmdUZXh0O31cclxuXHJcbiAgICAgICNwb3BPdXRCdG47XHJcbiAgICAgICNwb3BPdXRCdG5fV2lkdGggPSAzMDtcclxuICAgICAgI3BvcE91dEJ0bl9IZWlnaHQgPSAzMDtcclxuICAgICAgI3BvcE91dE1vZGFsO1xyXG4gICAgICAjd2hlbkNsb3NlZFJldHVybkJvcnJvd2VkID0gdHJ1ZTtcclxuICAgICAgZ2V0IHdoZW5DbG9zZWRSZXR1cm5Cb3Jyb3dlZCgpIHtyZXR1cm4gdGhpcy4jd2hlbkNsb3NlZFJldHVybkJvcnJvd2VkO31cclxuICAgICAgc2V0IHdoZW5DbG9zZWRSZXR1cm5Cb3Jyb3dlZCh2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy4jd2hlbkNsb3NlZFJldHVybkJvcnJvd2VkID0gdmFsO1xyXG4gICAgICAgICAgICBpZih0aGlzLiNwb3BPdXRNb2RhbCkgdGhpcy4jcG9wT3V0TW9kYWwud2hlbkNsb3NlZFJldHVybkJvcnJvd2VkID0gdmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbWluaW1pemVCdG47XHJcbiAgICAgICNtaW5pbWl6ZUJ0bl9XaWR0aCA9IDMwO1xyXG4gICAgICAjbWluaW1pemVCdG5fSGVpZ2h0ID0gMzA7XHJcbiAgICAgICNpc01pbmltaXplZCA9IGZhbHNlO1xyXG5cclxuICAgICAgI2NvbnRlbnRDb250YWluZXI7XHJcbiAgICAgIGdldCBjb250ZW50Q29udGFpbmVyKCkge3JldHVybiB0aGlzLiNjb250ZW50Q29udGFpbmVyO31cclxuXHJcbiAgICAgIGNvbnN0cnVjdG9yKG92ZXJyaWRlQ3NzU3R5bGVzLCBoZWFkaW5nVGV4dCwgcGFyZW50T2JqZWN0VG9BcHBlbmRUbykge1xyXG4gICAgICAgICAgICB0aGlzLiNoZWFkaW5nVGV4dCA9IGhlYWRpbmdUZXh0O1xyXG5cclxuICAgICAgICAgICAgLyoqQENvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICB0aGlzLiNjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0aGlzLiNjb250YWluZXIuc3R5bGUgPSBTVFlMRS5EaXYzO1xyXG4gICAgICAgICAgICB0aGlzLiNjb250YWluZXIuc3R5bGUuY3NzVGV4dCArPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47XCI7XHJcbiAgICAgICAgICAgIHRoaXMuI2NvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICs9IG92ZXJyaWRlQ3NzU3R5bGVzO1xyXG4gICAgICAgICAgICBpZihwYXJlbnRPYmplY3RUb0FwcGVuZFRvICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgcGFyZW50T2JqZWN0VG9BcHBlbmRUby5hcHBlbmRDaGlsZCh0aGlzLiNjb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipASGVhZGluZ0NvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICB0aGlzLiNoZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdGhpcy4jaGVhZGluZ0NvbnRhaW5lci5zdHlsZSA9IFwid2lkdGg6MTAwJTtoZWlnaHQ6XCIgKyB0aGlzLiNoZWFkaW5nQ29udGFpbmVyX0hlaWdodCArIFwicHg7Ym94LXNpemluZzpib3JkZXItYm94O1wiO1xyXG4gICAgICAgICAgICB0aGlzLiNjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4jaGVhZGluZ0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAvKipASGVhZGluZ1RleHQgKi9cclxuICAgICAgICAgICAgaWYoaGVhZGluZ1RleHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4jaGVhZGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuI2hlYWRpbmdUZXh0LmlubmVyVGV4dCA9IGhlYWRpbmdUZXh0O1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiNoZWFkaW5nVGV4dC5zdHlsZSA9IFwiZmxvYXQ6IGxlZnQ7IGhlaWdodDogMzBweDsgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7IGJhY2tncm91bmQtY29sb3I6IFwiICsgQ09MT1VSLkRhcmtHcmV5ICsgXCI7IHdpZHRoOiBjYWxjKDEwMCUgLSBcIiArICh0aGlzLiNtaW5pbWl6ZUJ0bl9XaWR0aCArIHRoaXMuI3BvcE91dEJ0bl9XaWR0aCkgKyBcInB4KTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgcGFkZGluZzogMHB4OyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiB3aGl0ZTsgdGV4dC1hbGlnbjogY2VudGVyOyBsaW5lLWhlaWdodDogMzBweDsgYm9yZGVyOiAxcHggc29saWQgXCIgKyBDT0xPVVIuRGFya0dyZXkgKyBcIjtcIjtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4jaGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiNoZWFkaW5nVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKkBNaW5pbWl6ZUJ0biAqL1xyXG4gICAgICAgICAgICB0aGlzLiNtaW5pbWl6ZUJ0biA9IGNyZWF0ZUJ1dHRvbihcIi1cIiwgXCJkaXNwbGF5OiBibG9jazsgZmxvYXQ6IHJpZ2h0OyB3aWR0aDogXCIgKyB0aGlzLiNtaW5pbWl6ZUJ0bl9XaWR0aCArIFwicHg7aGVpZ2h0OlwiICsgdGhpcy4jbWluaW1pemVCdG5fSGVpZ2h0ICsgXCJweDsgYm9yZGVyOm5vbmU7cGFkZGluZzoycHg7IGNvbG9yOndoaXRlO21pbi1oZWlnaHQ6IDIwcHg7IG1hcmdpbjogMHB4IDBweCAwcHggMHB4OyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDRweCA4cHggMHB4O2JhY2tncm91bmQtY29sb3I6XCIgKyBDT0xPVVIuTGlnaHRCbHVlICsgXCI7XCIsICgpID0+IHt0aGlzLnRvZ2dsZU1pbmltaXplKCk7fSk7XHJcbiAgICAgICAgICAgIHRoaXMuI21pbmltaXplQnRuLmlkID0gXCJtaW5pbWl6ZUJ0blwiO1xyXG4gICAgICAgICAgICB0aGlzLiNtaW5pbWl6ZUJ0bi5kYXRhc2V0Lm1pbmltaXplZFN0YXRlID0gXCJtYXhpbWl6ZWRcIjtcclxuICAgICAgICAgICAgdGhpcy4jaGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiNtaW5pbWl6ZUJ0bik7XHJcblxyXG4gICAgICAgICAgICAvKipAUG9wT3V0QnRuICovXHJcbiAgICAgICAgICAgIHRoaXMuI3BvcE91dEJ0biA9IGNyZWF0ZUJ1dHRvbihcIlxcdTI3NEZcIiwgXCJkaXNwbGF5OiBibG9jazsgZmxvYXQ6IHJpZ2h0OyB3aWR0aDogXCIgKyB0aGlzLiNwb3BPdXRCdG5fV2lkdGggKyBcInB4O2hlaWdodDpcIiArIHRoaXMuI3BvcE91dEJ0bl9IZWlnaHQgKyBcInB4OyBib3JkZXI6bm9uZTtwYWRkaW5nOjJweDsgY29sb3I6d2hpdGU7bWluLWhlaWdodDogMjBweDsgbWFyZ2luOiAwcHg7IGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggNHB4IDhweCAwcHg7YmFja2dyb3VuZC1jb2xvcjpcIiArIENPTE9VUi5EYXJrQmx1ZSArIFwiO1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEZpZWxkRGlzYWJsZWQodHJ1ZSwgdGhpcy4jcG9wT3V0QnRuKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vblBvcE91dCgpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiNwb3BPdXRNb2RhbCA9IG5ldyBNb2RhbFBvcE91dChcIkV4cGFuZGVkIFZpZXdcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZERpc2FibGVkKGZhbHNlLCB0aGlzLiNwb3BPdXRCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUG9wT3V0TGVhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja092ZXJyaWRhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIHRoaXMuI2NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuI3BvcE91dE1vZGFsLndoZW5DbG9zZWRSZXR1cm5Cb3Jyb3dlZCA9IHRoaXMud2hlbkNsb3NlZFJldHVybkJvcnJvd2VkO1xyXG4gICAgICAgICAgICB9LCB0aGlzLiNoZWFkaW5nQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIC8qKkBDb250ZW50Q29udGFpbmVyICovXHJcbiAgICAgICAgICAgIHRoaXMuI2NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0aGlzLiNjb250ZW50Q29udGFpbmVyLnN0eWxlID0gXCJ3aWR0aDoxMDAlO21heC1oZWlnaHQ6Y2FsYygxMDAlIC0gMzBweCk7b3ZlcmZsb3cteTpzY3JvbGw7ZGlzcGxheTpibG9jaztwb3NpdGlvbjogcmVsYXRpdmU7XCI7XHJcbiAgICAgICAgICAgIHRoaXMuI2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiNjb250ZW50Q29udGFpbmVyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9nZ2xlTWluaW1pemUoKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuI2NvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLk1heGltaXplKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuTWluaW1pemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBNaW5pbWl6ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy4jaXNNaW5pbWl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLiNjb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgdGhpcy4jbWluaW1pemVCdG4uaW5uZXJUZXh0ID0gXCLilq1cIjtcclxuICAgICAgICAgICAgdGhpcy4jbWluaW1pemVCdG4uZGF0YXNldC5taW5pbWl6ZWRTdGF0ZSA9IFwibWluaW1pemVkXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIE1heGltaXplKCkge1xyXG4gICAgICAgICAgICB0aGlzLiNpc01pbmltaXplZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLiNjb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHRoaXMuI21pbmltaXplQnRuLmlubmVyVGV4dCA9IFwiLVwiO1xyXG4gICAgICAgICAgICB0aGlzLiNtaW5pbWl6ZUJ0bi5kYXRhc2V0Lm1pbmltaXplZFN0YXRlID0gXCJtYXhpbWl6ZWRcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgb25Qb3BPdXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlUG9wT3V0U3RhdGUgPSB0aGlzLiNpc01pbmltaXplZDsvL3RydWVcclxuICAgICAgICAgICAgdGhpcy5NYXhpbWl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiNjb250ZW50Q29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICB0aGlzLiNjb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gXCIxMDAwMHB4XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG9uUG9wT3V0TGVhdmUoKSB7XHJcbiAgICAgICAgICAgIC8vaWYgd2FzIG1pbmltaXplZCBiZWZvcmUsIHJlc3RvcmUgdG8gbWluaW1pemVkXHJcbiAgICAgICAgICAgIGlmKHRoaXMucHJlUG9wT3V0U3RhdGUgPT0gdHJ1ZSkgdGhpcy5NaW5pbWl6ZSgpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuTWF4aW1pemUoKTtcclxuICAgICAgICAgICAgdGhpcy4jY29udGVudENvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSBcIjQwMHB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuI2NvbnRhaW5lci5zdHlsZSA9IFNUWUxFLkRpdjM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKkBPdmVycmlkYWJsZSAqL1xyXG4gICAgICBjYWxsYmFja092ZXJyaWRhYmxlKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxiYWNrT3ZlcnJpZGFibGVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNhZGRlZEhlYWRpbmdJdGVtc19jb21iaW5lZFdpZHRoID0gMDtcclxuICAgICAgYWRkSGVhZGluZ0J1dHRvbnMoLi4uaXRlbUNvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGl0ZW1Db250YWluZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuI2hlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiNhZGRlZEhlYWRpbmdJdGVtc19jb21iaW5lZFdpZHRoICs9IGl0ZW1Db250YWluZXJzW2ldLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuI2hlYWRpbmdUZXh0LnN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgLSBcIiArICh0aGlzLiNhZGRlZEhlYWRpbmdJdGVtc19jb21iaW5lZFdpZHRoICsgdGhpcy4jbWluaW1pemVCdG5fV2lkdGggKyB0aGlzLiNwb3BPdXRCdG5fV2lkdGgpICsgXCJweFwiO1xyXG4gICAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=