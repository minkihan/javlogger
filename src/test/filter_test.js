const Filter = require( "../service/Filter.js" ) ;

function getExtensionOfFilename(filename) {
    var _fileLen = filename.length;
    var _lastDot = filename.lastIndexOf('.');
    var _fileExt = filename.substring(_lastDot, _fileLen).toLowerCase();
    return _fileExt;
}

const filter_test = ( file ) => {
    let ext = getExtensionOfFilename( file ) ;

    // if( file.split( ".mp4" ).length > 1 ) {
    //     ext = ".mp4" ;
    // } else if( file.split( ".MP4" ).length > 1 ) {
    //     // eslint-disable-next-line no-param-reassign
    //     file = file.replace( "MP4", "mp4" ) ;
    //     ext = ".mp4" ;
    // } else if( file.split( ".mkv" ).length > 1 ) {
    //     ext = ".mkv" ;
    // }
    ext = getExtensionOfFilename( file ) ;
    const pt = file.split( ext ) ;
    let st = pt[ 0 ].toUpperCase() ;
    st = st.replace( "_", "-" ) ;

    for( const v of Filter.filter() ) { 
        st = st.replace( v, "" ) ;
    }
    for( const v of Filter.filter2() ) { 
        st = st.replace( v[ 0 ], v[ 1 ] ) ;
    }
    for( const v of Filter.filter3() ) { 
        st = st.replace( v[ 0 ], v[ 1 ] ) ;
    }

    const h = /00([0-9]+[0-9]+)/ ;
    if( h.test( st ) ) {
        st = st.replace( "00", "-" ) ;
    }
    const h2 = /([a-zA-Z]*)-([0-9]*)/ ;
    const h3 = /([a-zA-Z]*)([0-9]*)/ ;
    if( ! h2.test( st ) ) {
        const h3r = h3.exec( st ) ;
        st = `${ h3r[ 1 ] }-${ h3r[ 2 ] }` ;
    }
    console.log( st + ext ) ;
}

// test file name
const file = [ 
    "idbd00982A.mp4"
    , "tenx19012..mp4"
    , "ppbd00197A.mp4"
    , "big2048.com@MRSC-006.mp4"
    , "CBIKMV-100_4K-B.mp4"
    , "360AEG-018-B.mp4"
    , "dinm00587A..mp4"
    , "bbtu00001..mp4"
    , "bda00129..mp4"
    , "OFJE-276CD1-A.mp4"
    , "mkck00269a..mp4"
    , "hdka00217.mp4"
    , "esk-316ch.mp4"
    , "idbd00982A.mp4"
    , "akdl00066..mp4"
    , "csdx-003-4k-h264.mp4"
    , "FHD_6M-clo-102.mp4"
    , "450OSST-005.mp4"
    , "(kawaii)(KAVR-003)リアル空間で脱がしていく脱衣麻雀3DVR 鈴木心春_1.mp4"
    , "(kawaii)(KAVR-003)リアル空間で脱がしていく脱衣麻雀3DVR 鈴木心春_2.mp4"
    , "chd1080.com@kavr00025.part2.mp4"
    , "CJOB-081 誘惑ささやきBEST 耳から痴女られ何度も射精させられる.mp4"
    , "STARS-329 ロケ帰り相部屋NTR 大雪で東京に帰れなくなったお天気お姉さんが、仕事の愚痴を聞いてくれる新人ADと妊娠するまで中出ししまくった一晩。 唯井まひろ.mp4"
    , "[HD] SDTH-002 野外で精子ALLごっくん20発！マジメなフリした.mp4"
    , "SDNM-268 「お金よりも大切な何かを見つけに来ました…」冨田朝香 38歳 第2章 「10代の頃のようにトキメキました」’カメラ貸し’年下クンとGo To1日プライベートデート.mp4"
    , "[HD] SDAB-166 ね～っとり舐められ接吻 栗山さや.mp4"
    , "[HD] SDMM-076 [BIT].mp4"
    , "BBTU-009.1080p.mp4"
    , "big2048.com@TKBN-023.MP4"
    , "big2048.com@DKSB-109.MP4"
    , "big2048.com@NACX-074.MP4"
    , "bbs2048.org@CLOT-018.mp4"
    , "kpxvs.com-huntb00009.mp4"
    , "kpxvs.com-hunbl00046.mp4"
    , "KPAPKCOM-SNTJ-021.mp4"
    , "baixn.xyz-MDS892.mp4"
    , "bbs2048.org@h_094ktra00304ehhb.mp4"
    , "bbyxv.xyz-MADV509.mp4"
    , "aaxv.xyz_svs00073.mp4"
    , "STARS-229 户田真琴 uncensored leaked.rar"
    , "390JNT-007.mp4"
    , "396BIG-112.mp4"
    , "374IMGN-030.mp4"
] ;

for( const v of file ) {
    filter_test( v ) ;
}