import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div className=" bg-[#1D1B31] h-[670px] rounded-bl-[150px] ">
      <div className="flex justify-center  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="64" fill="none" viewBox="0 0 72 64" className=" m-[42px]">
          <path fill="#fff" d="M6.353 61.199c-.93 0-1.755-.153-2.477-.456a5.387 5.387 0 0 1-1.856-1.274 5.706 5.706 0 0 1-1.18-1.855 5.92 5.92 0 0 1-.407-2.185 5.95 5.95 0 0 1 .708-2.863 5.365 5.365 0 0 1 2.037-2.102c.886-.522 1.938-.786 3.153-.786 1.216 0 2.261.266 3.133.795.873.53 1.517 1.222 1.931 2.081l-2.79.86a2.528 2.528 0 0 0-.965-.955c-.4-.221-.85-.332-1.35-.332a2.73 2.73 0 0 0-1.46.41 2.99 2.99 0 0 0-1.063 1.147c-.265.491-.396 1.074-.396 1.747s.133 1.22.396 1.725c.264.505.618.899 1.063 1.178.443.28.937.42 1.481.42.357 0 .687-.057.988-.17.301-.115.576-.275.826-.483.25-.208.432-.432.547-.675l2.79.859a4.59 4.59 0 0 1-1.127 1.501 5.434 5.434 0 0 1-1.739 1.04c-.664.251-1.412.377-2.243.377V61.2Zm12.932 0c-.873 0-1.646-.197-2.317-.594a4.241 4.241 0 0 1-1.565-1.57V64h-2.854V49.85h2.51v1.93a4.768 4.768 0 0 1 1.63-1.54c.658-.374 1.409-.562 2.252-.562a4.91 4.91 0 0 1 2.093.445 5.23 5.23 0 0 1 1.674 1.242 5.654 5.654 0 0 1 1.105 1.836c.256.693.385 1.428.385 2.205 0 1.077-.21 2.05-.633 2.928-.423.877-1.001 1.574-1.739 2.09-.737.516-1.583.775-2.541.775Zm-.966-2.445c.43 0 .826-.09 1.191-.274.366-.182.676-.428.932-.738.257-.307.459-.67.6-1.084.144-.415.215-.837.215-1.274 0-.436-.075-.872-.226-1.273a2.968 2.968 0 0 0-.655-1.04 3.058 3.058 0 0 0-2.254-.948c-.257 0-.525.046-.804.135a3.357 3.357 0 0 0-1.468.963 2.667 2.667 0 0 0-.45.742v2.61c.187.405.426.775.72 1.112a3.23 3.23 0 0 0 1.019.786c.385.188.78.283 1.18.283Zm12.865 2.445c-.901 0-1.716-.153-2.447-.456a5.557 5.557 0 0 1-1.866-1.251 5.525 5.525 0 0 1-1.18-1.814 5.82 5.82 0 0 1-.408-2.185c0-1.048.24-2.013.72-2.896a5.494 5.494 0 0 1 2.037-2.122c.879-.529 1.935-.795 3.164-.795s2.26.266 3.133.797a5.522 5.522 0 0 1 2.017 2.093c.472.864.709 1.807.709 2.825 0 .184-.007.359-.023.52-.015.165-.028.302-.042.415h-8.666c.042.587.204 1.087.483 1.499.279.412.635.73 1.071.954a2.99 2.99 0 0 0 1.384.337 3.35 3.35 0 0 0 1.641-.419c.507-.279.855-.655 1.04-1.127l2.447.687a4.453 4.453 0 0 1-1.138 1.523c-.5.443-1.094.79-1.78 1.04-.686.25-1.452.377-2.296.377v-.002Zm-2.938-6.672h5.878c-.057-.56-.219-1.045-.482-1.457a2.811 2.811 0 0 0-1.041-.965 2.99 2.99 0 0 0-1.437-.345c-.53 0-.983.115-1.406.345-.423.23-.766.551-1.03.965-.265.412-.425.9-.482 1.457Zm23.784 6.672c-.9 0-1.715-.153-2.446-.456a5.557 5.557 0 0 1-1.867-1.251 5.527 5.527 0 0 1-1.18-1.814 5.82 5.82 0 0 1-.407-2.185c0-1.048.239-2.013.72-2.896a5.494 5.494 0 0 1 2.037-2.122c.879-.529 1.935-.795 3.164-.795s2.26.266 3.133.797A5.522 5.522 0 0 1 57.2 52.57c.472.864.709 1.807.709 2.825 0 .184-.007.359-.023.52-.015.165-.028.302-.042.415H49.18c.042.587.204 1.087.483 1.499.279.412.635.73 1.071.954a2.99 2.99 0 0 0 1.384.337 3.35 3.35 0 0 0 1.64-.419c.508-.279.856-.655 1.042-1.127l2.446.687a4.475 4.475 0 0 1-1.136 1.523c-.5.443-1.093.79-1.78 1.04-.686.25-1.452.377-2.296.377l-.002-.002Zm-2.938-6.672h5.88c-.058-.56-.22-1.045-.483-1.457a2.81 2.81 0 0 0-1.041-.965 2.99 2.99 0 0 0-1.437-.345c-.53 0-.983.115-1.406.345-.423.23-.766.551-1.03.965-.266.412-.425.9-.483 1.457Zm9.905.902c0-1.061.214-2.03.644-2.908.43-.877 1.023-1.57 1.78-2.079.757-.509 1.623-.764 2.595-.764.815 0 1.559.204 2.232.611.673.408 1.187.926 1.546 1.555v-6.736h2.896v12.659c0 .301.05.516.15.644.1.129.273.208.516.237v2.338c-.515.1-.923.142-1.222.129-.516.013-.94-.107-1.278-.366a1.407 1.407 0 0 1-.569-1.007l-.042-.709a4.18 4.18 0 0 1-1.685 1.61 4.713 4.713 0 0 1-2.22.558 5.218 5.218 0 0 1-2.135-.434 4.982 4.982 0 0 1-1.694-1.23 5.758 5.758 0 0 1-1.116-1.848A6.311 6.311 0 0 1 59 55.43h-.002Zm8.817 1.452v-2.608a2.974 2.974 0 0 0-.687-1.094 3.787 3.787 0 0 0-1.051-.768 2.593 2.593 0 0 0-1.159-.284c-.442 0-.843.091-1.202.275a3.011 3.011 0 0 0-.934.737 3.143 3.143 0 0 0-.6 1.063c-.135.4-.204.824-.204 1.273 0 .45.077.895.237 1.295.157.401.372.751.644 1.052.273.301.6.534.988.695a3.19 3.19 0 0 0 1.244.242c.286 0 .565-.047.837-.137.272-.091.534-.222.784-.39s.476-.365.675-.59c.2-.223.344-.475.43-.756l-.002-.005ZM46.132 45.108v2.45h-2.03c-.031-.003-.063-.003-.093-.003-.04 0-.076 0-.113.002-.446.024-.782.19-1.015.5-.25.337-.376.835-.376 1.493v.773h2.748v2.21h-2.748v8.453h-2.874v-8.453h-1.48v-2.21h1.48v-.665c0-.93.153-1.733.46-2.413.308-.68.742-1.207 1.3-1.577.556-.372 1.216-.558 1.973-.558.056 0 .106 0 .162.003l2.606-.003v-.002Z"/>
          <path fill="#1AD079" d="M57.378 18.478a19.512 19.512 0 0 0-10.719 3.186 19.51 19.51 0 0 0-10.717-3.186 19.52 19.52 0 0 0-10.719 3.186 19.513 19.513 0 0 0-10.719-3.186c-5.52 0-10.509 2.28-14.071 5.952l2.958 2.958a15.38 15.38 0 0 1 11.113-4.728c2.642 0 5.128.665 7.303 1.836a19.81 19.81 0 0 0-2.653 3.448c-.496.821-.934 1.68-1.309 2.573a7.702 7.702 0 0 0-.299 2.132 7.676 7.676 0 0 0 2.98 6.08c1.3 1.01 2.926 1.667 4.7 1.667 1.773 0 3.394-.65 4.691-1.65a7.67 7.67 0 0 0 3.007-6.097c0-.664-.084-1.307-.241-1.922-.002-.002-.002-.005-.002-.007a19.287 19.287 0 0 0-1.488-2.931 19.529 19.529 0 0 0-2.556-3.293 15.352 15.352 0 0 1 7.305-1.835c2.644 0 5.128.664 7.303 1.835a19.601 19.601 0 0 0-3.906 5.894 7.646 7.646 0 0 0-.357 2.319 7.67 7.67 0 0 0 2.983 6.078 7.645 7.645 0 0 0 4.705 1.61 7.63 7.63 0 0 0 4.683-1.593 7.669 7.669 0 0 0 3.007-6.095c0-.731-.102-1.437-.292-2.106 0-.005 0-.009-.005-.013a19.356 19.356 0 0 0-1.278-2.542 19.422 19.422 0 0 0-2.71-3.552 15.35 15.35 0 0 1 7.303-1.835c4.318 0 8.22 1.77 11.018 4.63l2.958-2.959a19.55 19.55 0 0 0-13.976-5.854ZM25.225 36.24a3.473 3.473 0 0 1-2.976-5.267c0-.002 0-.005.005-.007a15.365 15.365 0 0 1 2.97-3.972 15.349 15.349 0 0 1 2.942 3.925 3.443 3.443 0 0 1 .534 1.847 3.473 3.473 0 0 1-3.475 3.474Zm21.445.06a3.498 3.498 0 0 1-3.033-5.234l.004-.007a15.356 15.356 0 0 1 3.02-4.065 15.413 15.413 0 0 1 2.892 3.826 3.493 3.493 0 0 1 .616 1.982A3.499 3.499 0 0 1 46.67 36.3ZM14.45 0a8.116 8.116 0 0 0-8.116 8.117 8.118 8.118 0 1 0 16.236 0A8.118 8.118 0 0 0 14.45 0Zm0 12.054a3.937 3.937 0 1 1 0-7.873 3.937 3.937 0 0 1 0 7.873ZM35.891 0a8.116 8.116 0 0 0-8.117 8.117 8.118 8.118 0 1 0 16.237 0A8.118 8.118 0 0 0 35.89 0Zm0 12.054a3.937 3.937 0 1 1 0-7.873 3.937 3.937 0 0 1 0 7.873ZM57.334 0a8.116 8.116 0 0 0-8.117 8.117 8.118 8.118 0 1 0 16.237 0A8.118 8.118 0 0 0 57.334 0Zm0 12.054a3.937 3.937 0 1 1 0-7.873 3.937 3.937 0 0 1 0 7.873Z"/>
        </svg>
      </div>
       <h2 className=" font-extrabold text-[40px] text-white text-center mt-[69px]">Devenez un leader de l'éducation <br/> environnementale et du développement durable</h2>
       <p className=" text-white text-[22px] font-light text-center ">Cpefed , votre partenaire vers un métier indispensable, nos alumni vous en parlent.</p>
       <div className="bg-[url('../public/Group _5540.svg')]" ></div>
      
    </div>
   
    </>
  );
}
