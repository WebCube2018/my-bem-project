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
                                            block: "text",
                                            content: "sdfs"
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
        }
    ]
};
