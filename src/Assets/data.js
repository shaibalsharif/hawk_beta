import ahmed from './images/ahmed.jpg'
import jabir from './images/jabir.jpg'
import m from './images/m.jpg'
import rafiz from './images/rafiz.jpg'
import rakibul from './images/rakibul.jpg'

import portfolio1 from './images/portfolio/portfolio1.jpg'
import portfolio2 from './images/portfolio/portfolio2.jpg'
import portfolio3 from './images/portfolio/portfolio3.jpg'
import portfolio4 from './images/portfolio/portfolio4.jpg'
import portfolio5 from './images/portfolio/portfolio5.jpg'
import portfolio6 from './images/portfolio/portfolio6.jpg'
import portfolio7 from './images/portfolio/portfolio7.jpg'
import portfolio8 from './images/portfolio/portfolio8.jpg'
import portfolio9 from './images/portfolio/portfolio9.jpg'

import portfolio_cover_1 from './images/portfolio/portfolio-cover-1.jpeg'
import nest11 from './images/portfolio/nest-1-1.jpeg'
import nest12 from './images/portfolio/nest-1-2.jpeg'
import nest13 from './images/portfolio/nest-1-3.jpeg'
import nest14 from './images/portfolio/nest-1-4.jpeg'
import cover1 from './images/portfolio/cover1.jpeg'
import cover2 from './images/portfolio/cover2.jpeg'
import single1 from './images/portfolio/single1.jpg'


export const URL_ID_LIST = ["F982x43JYH8", "NcBjx_eyvxc", "5xqgvRIUffI"]
export const NAV_ITEM_LIST = [{ name: 'home', }, { name: 'about', }, { name: 'services', }, { name: 'portfolio', }, { name: 'contact', },]
export const NAV_PAGE_IMAGES = [ahmed, jabir, m, rafiz, rakibul]
export const TEAM_MEMBERS = [{ name: 'Jabir F Jaman', photo: jabir, position: 'dop & content planner' },
{ name: 'Ahmed Arif', photo: ahmed, position: 'buisiness developer & photographer' },
{ name: 'M Samun Sakib', photo: m, position: 'photographer & logistics' },
{ name: 'Rafiz Imtiaz', photo: rafiz, position: 'cinematographer & editor' },
{ name: 'Rakibul Islam', photo: rakibul, position: 'web developer' },]

export const SOCIAL_LINKS = [{ name: 'instagram', url: 'https://fb.com/hawk' },
{ name: 'facebook', url: 'https://fb.com/hawk' },
{ name: 'spotify', url: 'https://fb.com/hawk' },
{ name: 'vimeo', url: 'https://fb.com/hawk' },
{ name: 'behance', url: 'https://fb.com/hawk' },]



export const PORTFOLIO_LIST = [


    {
        id: 1, category_name: "photography", category_details: "Photography Photography Photography", photo: portfolio4, content: [
            {
                id: 1, category: 'commercial', sub: 'bushwick selfies pork belly lyft brooklyn messeng',
                background: portfolio1, content: {
                    title: 'retro jean lumber astag fir exual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'commercial',
                    cover_background: portfolio_cover_1, takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: [nest11, nest12, nest13],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: [cover1],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: [nest11, nest12, nest13, nest14],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: [single1],

                        }, {
                            type: 'cover',
                            photos: [cover2,],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },

            {
                id: 2, category: 'web design', sub: 'tumeric tumblr gluten-free man bun small',
                background: portfolio2, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'web design',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: [cover1],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },

            {
                id: 3, category: 'graphic design', sub: 'batch komnutcha subway tile salvia brooklyn',
                background: portfolio3, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'graphic design',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },


            {
                id: 4, category: 'commercial', sub: 'bushwick selfies pork belly lyft brooklyn messeng',
                background: portfolio4, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'commercial',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },
        ]
    },
    {

        id: 2, category_name: "cinematography", category_details: "cinematograpgy cinematograpgy cinematograpgy", photo: portfolio3, content: [
            {
                id: 1, category: 'commercial', sub: 'bushwick selfies pork belly lyft brooklyn messeng',
                background: portfolio1, content: {
                    title: 'retro jean lumber astag fir exual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'commercial',
                    cover_background: portfolio_cover_1, takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: [nest11, nest12, nest13],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: [cover1],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: [nest11, nest12, nest13, nest14],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: [single1],

                        }, {
                            type: 'cover',
                            photos: [cover2,],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },

            {
                id: 2, category: 'web design', sub: 'tumeric tumblr gluten-free man bun small',
                background: portfolio2, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'web design',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: [cover1],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },

            {
                id: 3, category: 'graphic design', sub: 'batch komnutcha subway tile salvia brooklyn',
                background: portfolio3, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'graphic design',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },


            {
                id: 4, category: 'commercial', sub: 'bushwick selfies pork belly lyft brooklyn messeng',
                background: portfolio4, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'commercial',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },
        ]
    },
    {
        id: 3, category_name: "photography2", category_details: "Photography Photography Photography", photo: portfolio2, content: [
            {
                id: 1, category: 'commercial', sub: 'bushwick selfies pork belly lyft brooklyn messeng',
                background: portfolio1, content: {
                    title: 'retro jean lumber astag fir exual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'commercial',
                    cover_background: portfolio_cover_1, takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: [nest11, nest12, nest13],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: [cover1],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: [nest11, nest12, nest13, nest14],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: [single1],

                        }, {
                            type: 'cover',
                            photos: [cover2,],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },

            {
                id: 2, category: 'web design', sub: 'tumeric tumblr gluten-free man bun small',
                background: portfolio2, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'web design',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: [cover1],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },

            {
                id: 3, category: 'graphic design', sub: 'batch komnutcha subway tile salvia brooklyn',
                background: portfolio3, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'graphic design',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },


            {
                id: 4, category: 'commercial', sub: 'bushwick selfies pork belly lyft brooklyn messeng',
                background: portfolio4, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'commercial',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },
        ]
    },
    {
        id: 4,
        category_name: "cinematography2", category_details: "cinematograpgy cinematograpgy cinematograpgy", photo: portfolio1, content: [
            {
                id: 1, category: 'commercial', sub: 'bushwick selfies pork belly lyft brooklyn messeng',
                background: portfolio1, content: {
                    title: 'retro jean lumber astag fir exual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'commercial',
                    cover_background: portfolio_cover_1, takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: [nest11, nest12, nest13],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: [cover1],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: [nest11, nest12, nest13, nest14],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: [single1],

                        }, {
                            type: 'cover',
                            photos: [cover2,],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },

            {
                id: 2, category: 'web design', sub: 'tumeric tumblr gluten-free man bun small',
                background: portfolio2, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'web design',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: [cover1],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },

            {
                id: 3, category: 'graphic design', sub: 'batch komnutcha subway tile salvia brooklyn',
                background: portfolio3, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'graphic design',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },


            {
                id: 4, category: 'commercial', sub: 'bushwick selfies pork belly lyft brooklyn messeng',
                background: portfolio4, content: {
                    title: 'retro jean lumbersexual mixtape hella',
                    client: 'yolo schlitz', year: 2019, role: 'commercial',
                    cover_background: 'item2', takeaways: ['user interface', 'media promotion', 'seo & marketing', 'Digital Branding', 'creative design'],
                    description: `Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. 
                    Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion
                     axe sustainable retro ethical gentrify. Occupy listicle hoodie viral, cred health goth farm-to-table pork belly slow-carb echo
                      park shaman banjo. Next level brooklyn mumblecore keytar stumptown.`,
                    nestings: [
                        {
                            title: 'Craft Beer Single bicycle rights',
                            description: `Retro jean shorts cronut lumbersexual mixtape hella you probably haven't heard of them austin williamsburg af
                     mustache pinterest. Mixtape kinfolk cray, wolf palo santo brunch iPhone. 3 wolf moon microdosing scenester, tilde roof party 
                     affogato typewriter celiac echo park craft beer bicycle rights man braid trust fund four dollar toast gentrify. IPhone humblebrag
                      kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo put a bird on.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'horizontal'
                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        }, {
                            title: 'UNICORN SHOREDITCH PITCHFORK SQUID',
                            description: `Thundercats single-origin coffee jianbing hoodie health goth keytar la croix skateboard retro art party
                             paleo kogi adaptogen. Crucifix cliche marfa wayfarers squid. Portland YOLO squid butcher thundercats flannel forage 
                             pitchfork ramps before they sold out 8-bit chia. Palo santo ramps YOLO, microdosing normcore lumbersexual aesthetic 
                             salvia flannel mustache next level hot chicken migas. Edison bulb before they sold out occupy, fam photo booth.`,
                            photos: ['item1', 'item2', 'item2'],
                            orientation: 'vertical'
                        }, {
                            type: 'single',
                            title: `QUINOA CHIA BEFORE PROBABLY HAVEN'T`,
                            description: `Drinking vinegar mixtape church-key letterpress, poke activated charcoal quinoa la croix fam 
                            flexitarian ethical ugh kombucha whatever. Roof party listicle swag direct trade, chambray microdosing prism crucifix 
                            tattooed DIY keffiyeh. Tofu tumeric meditation hashtag, waistcoat art party forage neutra. Williamsburg kinfolk 
                            slow-carb retro pitchfork. Pop-up bitters taiyaki cornhole readymade leggings gochujang. Hexagon hell of craft beer glossier.`,
                            photos: ['item1', 'item2', 'item2'],

                        }, {
                            type: 'cover',
                            photos: ['item1',],
                        },],
                    creatorsection: {
                        name: 'BALANCHAEV BALANCHA', position: 'CREATIVE DIRECTOR', company: 'XOXO PRODUCTION LTD',
                        description: `Synth keytar distillery offal man braid sartorial 90's blue bottle fanny pack kale chips craft beer
                     pok pok chambray. Yuccie listicle bicycle rights put a bird on it lyft flexitarian direct trade meggings vape chicharrones
                      green juice man bun. Organic craft beer chambray, migas vinyl chartreuse godard palo santo lomo readymade vexillologist. 
                      DIY occupy craft beer 3 wolf moon, VHS cornhole master cleanse irony paleo vaporware butcher chicharrones`
                    }

                }
            },
        ]
    },
]
