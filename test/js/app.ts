/// <reference path="../../sirius2d.d.ts" />
/// <reference path="simplescene.ts" />

module demo {

    export declare class Manifest {
        src: string;
        id: string;
    }
}

window.onload = () => {

    //new demo.SimpleMain("cv", 800, 600);

    var game = new demo.SimpleGame("cv", 800, 600);

    var demolist = document.getElementById("demos");

    demolist.appendChild(new Option("start", "start"));
    game.add("start", new demo.TestScene01());

    demolist.appendChild(new Option("skew", "skew"));
    game.add("skew", new demo.TestScene02());

    demolist.appendChild(new Option("transparent", "transparent"));
    game.add("transparent", new demo.TestScene03());

    demolist.onchange = function (e: Event) {
        var target: HTMLSelectElement = this;

       var option:HTMLOptionElement= target.options[target.selectedIndex];

        if (option.value !== "-1") {
            game.start(option.value);
        }
    }
};