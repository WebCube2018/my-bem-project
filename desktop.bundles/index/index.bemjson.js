module.exports = {
    block: 'page',
    title: 'Главная Лесол',
    favicon: './favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'default' },
    content: [
        {
            block: "header",
            tag: "header",
            content: [
                {
                    block: "top",
                    content: {
                        block: "container",
                        content: {
                            block: "blocks",
                            content: [
                                {
                                    elem: "side",
                                    elemMods: { align: "left" },
                                    content: [
                                        {
                                            block: 'block-menu',
                                            tag: "nav",
                                            content: {
                                                elem: "block-items",
                                                tag: "ul",
                                                content: [
                                                    {
                                                        elem: "item",
                                                        tag: "li",
                                                        content: {
                                                            elem: "link",
                                                            elemMods: { align: "hover" },
                                                            tag: "a",
                                                            attrs: {href: "#"},
                                                            content: "Продукция и услуги"
                                                        }
                                                    },
                                                    {
                                                        elem: "item",
                                                        tag: "li",
                                                        content: {
                                                            elem: "link",
                                                            elemMods: { align: "hover" },
                                                            tag: "a",
                                                            attrs: {href: "#"},
                                                            content: "Как купить"
                                                        }
                                                    },
                                                    {
                                                        elem: "item",
                                                        tag: "li",
                                                        content: {
                                                            elem: "link",
                                                            elemMods: { align: "hover" },
                                                            tag: "a",
                                                            attrs: {href: "#"},
                                                            content: "О компании"
                                                        }
                                                    },
                                                    {
                                                        elem: "item",
                                                        tag: "li",
                                                        content: {
                                                            elem: "link",
                                                            elemMods: { align: "border-left" },
                                                            tag: "a",
                                                            attrs: {href: "#"},
                                                            content: "Москва"
                                                        }
                                                    }
                                                ]
                                            }

                                        }
                                    ]
                                },
                                {
                                    elem: "side",
                                    elemMods: { align: "right" },
                                    content: [
                                        {
                                            block: "button-a",
                                            content: {
                                                elem: "link",
                                                tag: "a",
                                                attrs: { href: "#" },
                                                content: "Заказать сейчас"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    block: "container",
                    content: {
                        block: "blocks",
                        mix: { block: 'header__blocks' },
                        content: [
                            {
                                elem: "side",
                                elemMods: { align: "left" },
                                content: [
                                    {
                                        block: 'logo',
                                        content: [
                                            {
                                                block: 'image',
                                                url: "../../img/logo.svg",
                                                alt: "Лесол"
                                            },
                                            {
                                                elem: "nameSlogan",
                                                tag: "span",
                                                content: "Производство металлоизделий, кровли, водостоков"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: "side",
                                elemMods: { align: "center" },
                                content: [
                                    {
                                        elem: "text",
                                        tag: "span",
                                        content: "Горячая линия"
                                    },
                                    {
                                        elem: "href",
                                        tag: "a",
                                        url: "tel:+74951533109",
                                        content: "+7 (495) 153-31-09"
                                    },
                                    {
                                        elem: "text",
                                        tag: "span",
                                        content: "Звоните ежедневно, 9:00—18:00"
                                    }

                                ]
                            },
                            {
                                elem: "side",
                                elemMods: { align: "right" },
                                content: [
                                    {
                                        block: "form",
                                        tag: "form",
                                        attrs: { action: "/catalog/" },
                                        content: [
                                            {
                                                block: "search",
                                                content: [
                                                    {
                                                        elem: "input",
                                                        tag: "input",
                                                        attrs: {placeholder: "Введите наименование…", type: "search"},
                                                    },
                                                    {
                                                        elem: "button",
                                                        tag: "button",
                                                        attrs: {type: "button"},
                                                        content: "Найти"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            block: "section",
            tag: "section",
            content: [
                {
                    block: "container",
                    content: [
                        {
                            elem: "head",
                            tag: "h1",
                            mix: { block: 'section__align-center' },
                            content: "Продажа металлопроката от производителя"
                        },
                        {
                            elem: "description",
                            tag: "p",
                            mix: { block: 'section__align-center' },
                            content: "Изготовим изделия нужного вам размера и цвета за 2-4 дня"
                        },
                        {
                            block: "catalog",
                            content: [
                                {
                                    block: "catalog-item",
                                    content: [
                                        {
                                            elem: "caption",
                                            content: "Каталог продукции"
                                        },
                                        {
                                            block: "catalog-menu-blocks",
                                            tag: "ul",
                                            content: [
                                                {
                                                    content: 'Водосточные системы',
                                                    url: '#',
                                                    img: '../../img/noun-pipeline-605867.svg',
                                                    countri: "18"
                                                },
                                                {
                                                    content: 'Кровля',
                                                    url: '#',
                                                    img: '../../img/noun-roof-71229.svg',
                                                    countri: "26"
                                                },
                                                {
                                                    content: 'Профнастил',
                                                    url: '#',
                                                    img: '../../img/group-37.svg',
                                                    countri: "7"
                                                },
                                                {
                                                    content: 'Листовой прокат',
                                                    url: '#',
                                                    img: '../../img/noun-sheets-1282472.svg',
                                                    countri: "98"
                                                },
                                                {
                                                    content: 'Фасад',
                                                    url: '#',
                                                    img: '../../img/noun-home-1938118.svg',
                                                    countri: "73"
                                                },
                                                {
                                                    content: 'Снегозадержатели',
                                                    url: '#',
                                                    img: '../../img/noun-snow-1399767.svg',
                                                    countri: "38"
                                                },
                                                {
                                                    content: 'Рулонная сталь',
                                                    url: '#',
                                                    img: '../../img/noun-roll-511470.svg',
                                                    countri: "17"
                                                },
                                                {
                                                    content: 'Распродажа металла',
                                                    url: '#',
                                                    img: '../../img/noun-sale-1897279.svg',
                                                    countri: "5"
                                                }
                                            ].map(function(item) {
                                                return {
                                                    block: 'menu-items',
                                                    tag: "li",
                                                    mods: { type: 'link', image: 'yes' },
                                                    content: {
                                                        elem : 'link',
                                                        tag: "a",
                                                        attrs: {href: item.url},
                                                        mix: { block: 'menu-item', elem: 'link' },
                                                        url : item.url,
                                                        content : [
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'menu-items', elem: 'image' },
                                                                alt: item.content,
                                                                url: item.img
                                                            },
                                                            {
                                                                elem: 'link-text',
                                                                content: item.content
                                                            },
                                                            {
                                                                elem: 'count',
                                                                mix: { block: 'menu-items', elem: 'count-sltyle' },
                                                                content: item.countri
                                                            }
                                                        ]
                                                    }
                                                };
                                            }),
                                        },
                                    ]
                                },
                                {
                                    block: "catalog-item",
                                    content: [
                                        {
                                            elem: "caption",
                                            content: "Обработка металла"
                                        },
                                        {
                                            block: "catalog-menu-blocks",
                                            tag: "ul",
                                            content: [
                                                {
                                                    content: 'Обработка',
                                                    url: '#',
                                                    img: '../../img/noun-welding-255010.svg',
                                                    desc: "",
                                                    countri: "11"
                                                },
                                                {
                                                    content: 'Покраска',
                                                    url: '#',
                                                    img: '../../img/noun-spray-1547679.svg',
                                                    countri: "18",
                                                }
                                            ].map(function(item) {
                                                return {
                                                    block: 'menu-items',
                                                    tag: "li",
                                                    mods: { type: 'link', image: 'yes' },
                                                    content: [
                                                        {
                                                            elem : 'link',
                                                            tag: "a",
                                                            attrs: {href: item.url},
                                                            url : item.url,
                                                            content : [
                                                                {
                                                                    block: 'image',
                                                                    mix: { block: 'menu-items', elem: 'image' },
                                                                    alt: item.content,
                                                                    url: item.img
                                                                },
                                                                {
                                                                    elem: 'link-text',
                                                                    content: item.content
                                                                },
                                                                {
                                                                    elem: 'count',
                                                                    mix: { block: 'menu-items', elem: 'count-sltyle' },
                                                                    content: item.countri
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                };
                                            }),

                                        },
                                        {
                                            elem: 'desc',
                                            content: "Покрасим ваши изделия порошковой краской за 48 часов, от 135 руб./м²"
                                        },
                                        {
                                            elem: 'link-color',
                                            mix: {block: "container", elem: "link-style"},
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Посмотреть каталог цветов"
                                        },
                                        {
                                            elem: 'count',
                                            mix: { block: 'menu-items', elem: 'count-sltyle' },
                                            content: "2500",
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: "background",
                    content: {
                        block: "container",
                        content: [
                            {
                                elem: "content-block",
                                content: [
                                    {
                                        elem: "item",
                                        content: [
                                            {
                                                elem: "img",
                                                tag: "img",
                                                attrs: {src: "../../img/group-32.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        content: "Размер на выбор"
                                                    },
                                                    {
                                                        elem: "desc",
                                                        content: "Изготовим изделия любых размеров под ваши задачи на собственном современном производстве в Москве за 1-3 дня. Предлагаем резку, раскрой, гибку, роспуск металла."
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: "item",
                                        content: [
                                            {
                                                elem: "img",
                                                tag: "img",
                                                attrs: {src: "../../img/group.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        content: "Цены от производителя"
                                                    },
                                                    {
                                                        elem: "desc",
                                                        content: "Покупайте без посредников и наценок. Производим и продаем металлоизделия оптом и в розницу от 1 желоба, 1 листа, 1 трубы и т. д."
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: "item",
                                        content: [
                                            {
                                                elem: "img",
                                                tag: "img",
                                                attrs: {src: "../../img/group-34.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        content: "Красим в 2500 цветов"
                                                    },
                                                    {
                                                        elem: "desc",
                                                        content: "Красим металл порошковой краской по каталогам RAL, RR, ПМ, NCS. Подберем оттенок по образцу вашей детали. Стойкая импортная краска, европейское оборудование, 24/7. "
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: "h2",
                                tag: "h2",
                                mix: { block: 'section__align-center' },
                                content: "Как совершить покупку"
                            },
                            {
                                elem: "content-block",
                                content: [
                                    {
                                        elem: "item",
                                        elemMods: {display: "block"},
                                        content: [
                                            {
                                                elem: "img",
                                                elemMods: {border: "radius"},
                                                tag: "img",
                                                attrs: {src: "../../img/1.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        elemMods: {size: "smoll"},
                                                        content: "Сделайте заказ по телефону или заполните анкету на сайте "
                                                    },
                                                    {
                                                        elem: "desc",
                                                        content: "Менеджер пришлет вам счет или квитанцию для оплаты по электронной почте."
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: "item",
                                        elemMods: {display: "block"},
                                        content: [
                                            {
                                                elem: "img",
                                                elemMods: {border: "radius"},
                                                tag: "img",
                                                attrs: {src: "../../img/2.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        elemMods: {size: "smoll"},
                                                        content: "Оплатите счет через банк или баковской картой"
                                                    },
                                                    {
                                                        elem: "desc",
                                                        content: ""
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: "trait",
                                        tag: "span",
                                    },
                                    {
                                        elem: "item",
                                        elemMods: {display: "block"},
                                        content: [
                                            {
                                                elem: "img",
                                                elemMods: {border: "radius"},
                                                tag: "img",
                                                attrs: {src: "../../img/3.svg"},
                                            },
                                            {
                                                block: "block-desc",
                                                content: [
                                                    {
                                                        elem: "title",
                                                        elemMods: {size: "smoll"},
                                                        content: "Заберите заказ самовывозом или оформите доставку"
                                                    },
                                                    {
                                                        elem: "link",
                                                        mix: {block: "container", elem: "link-style"},
                                                        tag: "a",
                                                        attrs: {href: "#"},
                                                        content: "Посмотреть условия доставки"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    block: "container",
                    content: [
                        {
                            elem: "h3",
                            tag: "h3",
                            mix: { block: 'section__align-center' },
                            content: "Часто покупают"
                        },
                        {
                            block: "catalog-element",
                            content: [
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/95835030a6.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/479c62e275.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/95835030a6.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/479c62e275.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                },
                                {
                                    elem: "item",
                                    content: [
                                        {
                                            elem: "img",
                                            tag: "img",
                                            attrs: {src: "../../img/95835030a6.jpg"}
                                        },
                                        {
                                            elem: "link",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Профлист С8-1150 "
                                        },
                                        {
                                            elem: "text-price",
                                            mix: { block: 'section__align-center' },
                                            tag: "p",
                                            content: "от 230 руб./м"
                                        },
                                        {
                                            elem: "link-order",
                                            mix: { block: 'section__align-center' },
                                            tag: "a",
                                            attrs: {href: "#"},
                                            content: "Заказать"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: "separator",
                },
                {
                    block: "container",
                    content: [
                        {
                            elem: "title-h",
                            mix: { block: 'section__align-center' },
                            content: "О компании"
                        }
                    ]
                }
            ]
        }
    ]
};
