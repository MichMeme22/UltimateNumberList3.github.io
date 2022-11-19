import { Chapter, Class, Section, SubSection, ListNumber } from "./numbers/types"
import { NumberList } from "./numbers"
import { returnSymbols } from "./numbers/symbols"
import { Changelog } from "./changelog"

let elementText = `<div id="numberList">`

let totalNumbers = 0

for (const ichapter in NumberList) {
    const ochapter: Chapter = NumberList[<any>Number(ichapter)]
    elementText += `<div class="listChapter">
    Chapter ${Number(ichapter)+1} - ${ochapter.name}`
    for (const iclass in ochapter.classes) {
        const oclass: Class = ochapter.classes[<any>Number(iclass)]
        elementText += `<div class="listClass">
        Class ${Number(iclass)+1} - ${oclass.name}`
        for (const isection in oclass.sections) {
            const osection: Section = oclass.sections[<any>Number(isection)] 
            elementText += `<div class="listSection">
            Section ${Number(isection)+1} - ${osection.name}`
            for (const isubsection in osection.subsections) {
                const osubsection: SubSection = osection.subsections[<any>Number(isubsection)] 
                elementText += `<div class="listSubSection">
                Section ${Number(isection)+1}.${Number(isubsection)} - ${osubsection.name}`
                for (const ilistnumber in osubsection.listnumbers) {
                    const olistnumber: ListNumber = osubsection.listnumbers[<any>Number(ilistnumber)] 
                    let symbols = returnSymbols(olistnumber)
                    if (symbols !== "") {
                        symbols += " "
                    }
                    elementText += `<br><span class="listNumber">
                    ${olistnumber.word} ${symbols}- ${olistnumber.number}
                    </span>`
                    totalNumbers += 1
                }
                elementText += "</div>"
            }
            elementText += "</div>"
        }
        elementText += "</div>"
    }
    elementText += "</div>"
}
elementText += "</div>"

addEventListener('DOMContentLoaded', function(event: Event) {
    this.document.getElementById("app")!.innerHTML += elementText
    this.document.getElementById("totalNumbers")!.innerHTML = String(totalNumbers)
    this.document.getElementById("app")!.innerHTML += Changelog
    this.document.getElementById("loadingScreen")!.className = "hidden"
    this.document.getElementById("app")!.className = ""
});