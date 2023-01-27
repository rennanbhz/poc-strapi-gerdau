import localFont from "@next/font/local";

export const AeonikFono = localFont({
    src: [{
        path: '../fonts/AeonikFono-Regular.otf',
        weight: '400',
        style: 'normal'
    }]
})

export const AeonikFonoBold = localFont({
    src: [{
        path: '../fonts/AeonikFono-Bold.otf',
        weight: '700',
        style: 'normal'
    }]
});

export const AeonikFonoLight = localFont({
    src: [{
        path: '../fonts/AeonikFono-Light.otf',
        weight: '300',
        style: 'normal'
    }]
})