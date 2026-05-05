const male = document.getElementById('male');
const female = document.getElementById('female');

document.addEventListener('DOMContentLoaded', () => {
    let genero = "male";
    let racaSelecionada = null;
    let classeSelecionada = null;

    const botoesRaca = document.querySelectorAll(".raca button");
    const botoesClasse = document.querySelectorAll(".classe button");
    const demo = document.getElementById('span_raca');

    const racas = {
        humano: {
            icon: {
                male: "assets/racas/icones/human_male_icon.png",
                female: "assets/racas/icones/human_female_icon.png"
            },
            preview: {
                male: "assets/racas/humano.png",
                female: "assets/racas/humana.png"
            }
        },
        gnomo: {
            icon: {
                male: "assets/racas/icones/gnomo_male_icon.png",
                female: "assets/racas/icones/gnomo_female_icon.png"
            },
            preview: {
                male: "assets/racas/gnomo.png",
                female: "assets/racas/gnoma.png"
            }
        },
        anao: {
            icon: {
                male: "assets/racas/icones/anao_male_icon.png",
                female: "assets/racas/icones/anao_female_icon.png"
            },
            preview: {
                male: "assets/racas/anao.png",
                female: "assets/racas/ana.png"
            }
        },
        dragonato: {
            icon: {
                male: "assets/racas/icones/dragonato_male_icon.png",
                female: "assets/racas/icones/dragonata_female_icon.png"
            },
            preview: {
                male: "assets/racas/dragonato.png",
                female: "assets/racas/dragonata.png"
            }
        },
        elfo: {
            icon: {
                male: "assets/racas/icones/elfo_male_icon.png",
                female: "assets/racas/icones/elfo_female_icon.png"
            },
            preview: {
                male: "assets/racas/elfo.png",
                female: "assets/racas/elfa.png"
            }
        }
    };

    function carregarIcones() {
        botoesRaca.forEach(botao => {
            const raca = botao.dataset.raca;
            botao.style.backgroundImage = `url("${racas[raca].icon[genero]}")`;
        });
    }

    function atualizarPreview() {
        if (!racaSelecionada) return;

        demo.style.backgroundImage = `url("${racas[racaSelecionada].preview[genero]}")`;
    }

    botoesRaca.forEach(botao => {
        botao.addEventListener('click', () => {
            botoesRaca.forEach(b => b.classList.remove("selecionado"));

            racaSelecionada = botao.dataset.raca;
            botao.classList.add("selecionado");

            atualizarPreview();
        });
    });

    botoesClasse.forEach(botao => {
        botao.addEventListener('click', () => {
            botoesClasse.forEach(b => b.classList.remove("selecionado"));

            classeSelecionada = botao.dataset.classe;
            botao.classList.add("selecionado");

            console.log("Classe:", classeSelecionada);
        });
    });

    male.addEventListener('click', () => {
        genero = "male";
        carregarIcones();
        atualizarPreview();
    });

    female.addEventListener('click', () => {
        genero = "female";
        carregarIcones();
        atualizarPreview();
    });

    carregarIcones();
});