import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import { IVideo, pipedApi } from "@/service/piped.service";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const WatchPage = () => {
  const [params] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [video, setVideo] = useState<IVideo>();

  const videoId = params.get("v") || "";
  const src =
    "https://pipedproxy-cdg.kavin.rocks/videoplayback?aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&bui=AbKP-1MTYbPjRKImocAZYYbkQlPkpkhOrBDtkhSmI0EbhMOkJu42bRpEmbqNronlaqDmXcF0iwkwVwtj&c=WEB&clen=38702813&cpn=rmUduc7Xg6UdekCm&dur=130.663&ei=D3RoZpTABJf7xN8PudqsiAk&expire=1718143087&fvip=4&gir=yes&host=rr3---sn-25glene6.googlevideo.com&id=o-ANnYIxPK0zGj8gmnsnViNsKApx8rXd6Fx1fq_26lY3ME&initcwndbps=1866250&ip=156.146.63.183&itag=298&keepalive=yes&lmt=1717968171000257&lsig=AHlkHjAwRQIhAJGxZQBF3ymCNn6KQfAEHa-w1pnyJUrvvRh1TKX2OhFiAiAmYlDqj4KyC-38JWgrv-920Fi5BPaAYJ-kFyL4Onl5NA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&mh=DV&mime=video%2Fmp4&mm=31%2C29&mn=sn-25glene6%2Csn-25ge7nsd&ms=au%2Crdu&mt=1718120685&mv=m&mvi=3&n=mkKn7D7gd_cZiw&ns=YwE4ZEuw-zuO6o6WKkc3-bcQ&pl=24&qhash=c77dde25&requiressl=yes&rqh=1&sefc=1&sig=AJfQdSswRAIgPr6Gp4GidhiwMy6M8KcfOpyY_Y0daS7LzTcdfdM1assCIHFiBM-OvuNGW0P_5xxRiA8XslcGUisO_8xKROf8MCKE&source=youtube&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&spc=UWF9f23Vg9i2JYfXdb9293nsJ_t9AWVy7O8mkJKKpKTQSPHWsgiIVSVHJ6XO&svpuc=1&txp=5532434&vprv=1&xpc=EgVo2aDSNQ%3D%3D";

  const audio =
    "https://pipedproxy-cdg.kavin.rocks/videoplayback?c=IOS&clen=798869&cpn=YNuQ44TH4L_q8-vb&dur=130.774&ei=D3RoZuzJBPe6vdIPm52okA0&expire=1718143087&fvip=4&gir=yes&host=rr4---sn-25ge7nsd.googlevideo.com&id=o-ALUlPnneUIx7F_w6p76uS995m7dleBELH0f-drHqqNI0&initcwndbps=1866250&ip=156.146.63.183&itag=139&keepalive=yes&lmt=1717962797183801&lsig=AHlkHjAwRQIgBDM5gXLlMD7mZTRwcjbp7S6FwlFFTzsOuCU0ll01q8gCIQCkDBvAjrmsUyJ73uCnNPdhhbMhFZ7rb0uOuBWMPZaXlw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&mh=DV&mime=audio%2Fmp4&mm=31%2C26&mn=sn-25ge7nsd%2Csn-aigl6ns6&ms=au%2Conr&mt=1718120685&mv=m&mvi=4&pl=24&qhash=b5f654bf&requiressl=yes&rqh=1&sig=AJfQdSswRAIgNyCBmK9DxX5qDZ3Z49StAF4C10BxXw6gj1wIpT55zHMCIGYanN6RmQVk2sCcK-stlUTQSavLgvpGruNL_-cSBLGN&source=youtube&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&svpuc=1&txp=5532434&vprv=1&xpc=EgVo2aDSNQ%3D%3D";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await pipedApi.getVideoById(videoId);
  //     setVideo(result);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);
  console.log(video);
  if (isLoading) return "loading";
  return (
    <div>
      <VideoPlayer title="Круто катаюсь на мопеде!" />
    </div>
  );
};
