			document.addEventListener("DOMContentLoaded", function () {
				replacePhPWithPesoSymbol();
			});
	
			function replacePhPWithPesoSymbol() {
				const bodyElement = document.body;
				const contentText = bodyElement.innerHTML;
				const replacedText = contentText.replace(/PhP/g, '₱');
				bodyElement.innerHTML = replacedText;
			}