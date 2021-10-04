import React from "react";

import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";

import Accessory from "../../components/Accessory";
import Button from "../../components/Button";
import { StatusBar } from "react-native";

const CarDetails: React.FC = () => {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("Scheduling");
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
      />
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider
          imageUrl={[
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWEhgUFRYYGBIaFRwaGBgZFhwaGBkYGBgZGhoVGBodIDAlHB44HxgZJj0mKy80NTU1HCQ7QDszPy40NTEBDAwMDw8QGBERGDEdGB0xMT8xNDExMT8/Pz8/PzE0MT80PzQxPz8xNDExNDQxNDExMTExMTExMTExMTExMTExMf/AABEIAJMBVwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABGEAACAQIDBAYHBQUFCAMAAAABAgADEQQSIQUGMVETIjJBYXEHFFKBkaGxQoKSwdEVYnKiwjNUsuHwI0NEY2SEo9MWFyT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEx/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBETBisSlNC9R1RBxZiAB7zAzxOdbd9KmGokrRVqrDvPUX6X+IEqzelDaFe4w+GW3MK7gfeBUCB26Y2qqOLAeZE/OmK9JW0CSC1MEGxshOo465jNZ9+9o2DZ7KeB6OwPkeBgfpH1pPbX8Qnz1xPaE/NI34x541R+AT0N9cb7anzT9DA/Snrie0I9bT2197AfWfnGnvzjBxKH7rD6PL9uztSq2E9cxQCU2JFJFY3qAXu/WOi6HXkCeFpR1NayngynyIMyziuP9IdW56LDMUHf0DWtzzML281E08N6UK+lqfuWxN9NAFC9x5yDu0Tkmz/Sut8tVSvPMp/K5+Jl52NvdhsQBlcAnxBF+VxpfwgWKJ5Bvw4T1AREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQETDUrKvaZR5kCULe/bOPdmpYOmyoDbpBUpqW8VzMCBAld7d9qGCBUWqYi2iA2C8jUb7PlxPK2s45tHbWN2jVtcuQdAOrTpg8hwX5sfGbSbl416maql0JJYLWTOxOpu1za54nU/WWnDbMxVNAlLBoqDgPWLe82Q3PiYE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ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP//Z",
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWEhgUFRYYGBIaFRwaGBgZFhwaGBkYGBgZGhoVGBodIDAlHB44HxgZJj0mKy80NTU1HCQ7QDszPy40NTEBDAwMDw8QGBERGDEdGB0xMT8xNDExMT8/Pz8/PzE0MT80PzQxPz8xNDExNDQxNDExMTExMTExMTExMTExMTExMf/AABEIAJMBVwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABGEAACAQIDBAYHBQUFCAMAAAABAgADEQQSIQUGMVETIjJBYXEHFFKBkaGxQoKSwdEVYnKiwjNUsuHwI0NEY2SEo9MWFyT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEx/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBETBisSlNC9R1RBxZiAB7zAzxOdbd9KmGokrRVqrDvPUX6X+IEqzelDaFe4w+GW3MK7gfeBUCB26Y2qqOLAeZE/OmK9JW0CSC1MEGxshOo465jNZ9+9o2DZ7KeB6OwPkeBgfpH1pPbX8Qnz1xPaE/NI34x541R+AT0N9cb7anzT9DA/Snrie0I9bT2197AfWfnGnvzjBxKH7rD6PL9uztSq2E9cxQCU2JFJFY3qAXu/WOi6HXkCeFpR1NayngynyIMyziuP9IdW56LDMUHf0DWtzzML281E08N6UK+lqfuWxN9NAFC9x5yDu0Tkmz/Sut8tVSvPMp/K5+Jl52NvdhsQBlcAnxBF+VxpfwgWKJ5Bvw4T1AREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQETDUrKvaZR5kCULe/bOPdmpYOmyoDbpBUpqW8VzMCBAld7d9qGCBUWqYi2iA2C8jUb7PlxPK2s45tHbWN2jVtcuQdAOrTpg8hwX5sfGbSbl416maql0JJYLWTOxOpu1za54nU/WWnDbMxVNAlLBoqDgPWLe82Q3PiYEJsrc+klmrf7WpyPYHkv2vvfAT7vntXoKIpJ1XcEC2mRODMLcD3D3nuk+1HHDjhaYHjiT/wCqVHbO5+PxNZqxWmAbAKKtwqjgl7C/PzJgV7dXY3rNcoxK01Us5W1+SqCRa9/kDMO3cJSo4hqVLOwQ5WZ2BzNpcDKosBw+Msuz92tq4cMKORQxBazobkaDVlM0q+6ONZ2d6Wd2YsxFWmLsxuTxHeYgitoY04l0PRU0fst0a5Q7MRYsOfdxM3Nu7s1cM12s9MmyuugJ45WXip0Ph4zZpbuYlCG9WcEEEEPTNiDcEdfnNjF4DEv26dd2HDNdwL8bam3ugau6G7xxeLSidKY69ZvZpLbNY9xNwo/iv3Sxb7b4MmIFPDqgRECrdbhEsMiot7AkBW8io7jJTZ1A4DZju1NvWcR1nXK2YU17FLhcE317xnb2ZStjiklVsRjlYjtqrCwd3a5Zh4X7PM+EolN3t86lSqtLEBGV2Ch1FipbQZhexFyB3WvKxicOaWIqIumSqwW3dkchbe63wlyxO/GznsDhc9uGliP4Ta6nxBE0K+71bEVDXw9KotF+sOmJDgniM7DM478x5wLD+08JiKapWZC7KMysrdViNbPaw17wZT9t7vVMJVDI5FNr5HBym2hyMR38PA/ISg3IxRN2dFHjUv8AITaO5NVwFqYsZRwUh3AsLdUFrDTSQfd1/SPWw5WnXIqUuBIOo8SBw8x4ad87Vs3aKV0zIfMHRlPIickwHo5pMf7V35gBQD4cL298ueF2M9Ahldsw7wAL873OsousSDwm2tQtUWPDMOHvHd5yckCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB5LWFzoJGYrbVNDlHWb4KPEse7yvKnjt7Ole1Mg0izKpB1BVioZvO1wfEe/XqI7sX16x+QFh8hLmCw1d4CTYMPJF/qb9JH4nb19BmbxLm3uAsJo0NnOb6GZf2Q3I/CWDx+2iOCKPuj6mF27UJsvHkBPZ2URxFhPD4U2yqLL3nvPmfygeam3Ko0za+cwNteoeLt5A2+fGbFLZF+Og7yZsI+Ep6L/tan7imoAeVx1FPmbwI9MW51Ck/vHX+Yz4+0X72+c28RiGf/cuOQd0QHyyZ5oM5/wCmQ+NQv8upFwffXXPeZmoszHvPxkPWx1VauRSjgZcxTDuFUMe0ztUIA9xv3SawuLAPW1HLgPlKJHD4cDthR/EZK4evQXvp38AJrvtihTp53CU09piqjzJNpCVK1Ovd6FRKg78jKbfhJkE/tDb9GmVUs2dzZAtN3ueXUU29857t7dpsRi2qHKEzrUyu4UN32ZW1y3vpyMtWHwLMJ8TYTNqR/oaflA9LlXgaKH9wD5ZVmN6injVv5IT9bTeXYnOwnv8AZSDiy/EQIbMhAJ6QakWIQG2utgx8J9GT2HPm4/ISTTZmGS5UgEkXsDzGg00EyM1BfaPuH6wI84l1Q5FynnZnt4lcwvPld3sCdDbkvxFidPfJJMVT7kPxH6TS3u2tTwtIOVLO1giDtMxubAf64HlAjHdj3m8ve7eKNTDKSbst1J/hNh8rTkOzN62q1uhr0eidwTTa9wxGuUmwsf8AWmk6ZuNVvRqDlVPzVf0Mmi0RESBERAREQEREBERAREQEREBERAREQEgd7NorRw5DMy9JdM6gFkup64B7xpJ6c69K20FT1ek2mfOynuJXIpU8u2Iwc22njaOEypSJq1VUBXcZUQW7QS+rcyfdbWQI2/X9vXv6iHj5zZ26nWRuYI/Dl/WXP0dbs4XE4V3xFIO4rlQczrZQlM26pHex+MCF2LtOo9MlnBGRypCKcrqbKhyC9zYMQfsm4tYmTGL2nkViHIF6gVsmikIGTN1esc9wLdsEW9qW2p6P9mhb+rX8FdydT3DNPqej3ZzIP/zFb62zuGHgdYHLV3wxVhmI04WV1PM3IFzNrZ+/mIp1UZ1V6YbrIWrAsp0IU57XtexIIvaWjfLcfBYfBvWpIwdWQDrZh1nAPEX4GcxfDi9lUE3sAALknQDzgdzehhMXQVlrNkcB0fpTnU8nRmKhgbgqR3SnY/Z2PR2RKwrUyLKwqFLfdGl5mwOFWjTSkvBFCmw4vxdtP3ryVw+Ly/YPvso/mM1BUU3YxzWzBGNtS9Ym57iBkNvLWZDuXjVGZq6U7ewCfcLIPrLmm3lQWZ6Cc89ZR8bKfrMeI2/TrdRcThi3so2Zj4Dri/wiCD2bg61MtmqI6tYkKjKxZQwUsxc3ADvp43kg2JSkj16n9mi5iPaPBUHMk2HvEyLSLafPUfKVjfzEZadLDrc5nZ38Qlgqn3kn7scEa1Krj6vSVgXZjanTDWVAe4X8BcnibE+WpiKD4KomJw5Kkalb5lZb2Oo0K3FiO7joZIYWqaWIolWJCo4sPbdSjDxIva/K0zUsHWxFCsadNugo02XP3tk7ZUHtKevw5+GmR0nZe3VqYenUTTpFzHmOHV873B8oG0j3seJ7/wB4znu42MIwmQ/YrOo8iFf6kycfGADU28zNYLE20PGYnx/jK3+0QTZbseSi5m1SwuJfs0So51DkHwNjKiSq43x7x9RMD4vxnxdg1TbPVCi/BFLfM277RV2Vh6etRiTzqVAo+AsfnA29mVgzDW48NR8ZVt9dqZ8XUftCigVF5O1gSf5R8ZO0Nq4ZTlQXPNM2nmXNiJRGcV3qhiRmqMbqLnLdlJ5mwsQJNV73m6MZmo8aTh1FycoVlCknmeP3r8p1/cCqGSrbvKN+JT+k5vicXSbB4jD4dVCdAzVmcZq71aY4Na6ogsthe+h4WM6Z6PMIUwmc8XbT+FBlHzDfGQWyIiQIiICIiAiIgIiICIiAiIgIiICIiAnM/TZhicJQqr2kr5b+Drc6+dMfKdMkBvNsZsQiqAjgXBSpcKb26ysAbMLW4WIJ4QPz/VYYiiVVlFZWV1Usq5uKsoLad4Nu+084OjtKmLUfWEW9ytKoSCbcbIbX0GvgJYN49hUMM7LXwFUIoB6WmztTs3Ah9FGuljaVb1XAH7ddfdTP9UomKe1ttprmxtuRR2+us2V3s2youxrZfHDgn4HWQ1LBYT7GKrL90f0tNlaCDsbRrL92r/TIM+0t5dpVUKVy5okglRQQE2NxoDcTU2BSfpunqKVp0xmBdMuaodKaanjfr+SGZloueztSr7xiB9Zir7MZ+3jw9uHSZjbyznSUSWO2ioUszkD+I6nkADrKlj8Z0jaLZfHVj4k/kJO4bc81NRi6FuZqJ9M8203IRdWx+GHmUP8AXApgva4XTnOiej6mPU65YKc9dFPAiyITb/yTU/8AjGDHb2nT8lC/qZObOxuzsJQ6Ja5qdcuSFYksVVeCpYCyLIPOyNss9AEmzKSjkaEshtcnxsD75V95MSXxi6nRUS/mST/jm0mJpF3GFSoVdy7KesQT3qoFwPOVrHYgmo7ahg546EFTYX5cJdFvwhpsrVOicpm6RVANs5Ls1zYgCyPcfvDwtIYfaDYmqEStloL/AMOgsgKLch3B65IBIuLaG1p9w+00FOnTpaI1WmC2QLmd1FXq/uhS2vP548ClOmmMxoOWoquuXhdsSpFJwO8Wck+NMmQQ25lijqzpTU1mJdyAAAqg25nwEtFLGbNpgFmes4GvVYi/gNF+LGUXAbTwtOmM+eoxuSiLkCkk9qo2vwHvmOpvYR/ZUKVPkcudx997/Sao6RS3wQDLhsI7eWVPiEVjMOJ3ixx1CUaK82sGHnnb8pzZt6a7f2jO49npGVfglpu4Teukhudn4VzzqGq5P46hElFixe13bSrtBbezTZj/ACooBmHDYFahuiYusT308M9vezTJgvSuaQsmz8Kg/wCWpT6CStP021PtYNfdVP5pFFfq4/CUyyGpUSqjMrLUpm6upIZTkvY3FuE09x8eqVHLi7Gi5VtOpluXfXj1SbeNj3SK3v2umMxTYmnSNJqgGdc2YFwLFlNhxAGnO575g2XTrKwZEckH7NNm+WUgjw74o6du9s5XruGU9JVelTPGzoCGqjxISi4J/eXnr1+jSVVCqAFUAADgAOAnMfR9UrNVbEYijW6QL0dJRQZEVTbO5zWuxyqL62A8bTptOtf7LDzA/WQZonwGfYCIiAiIgIiICIiAiIgIiICIiAiIgeCwE162Ppp2mAm1Mb0VPEA+YgVva29mBVGSq2ZGUqyZCwZSLEEd4tPz9vPhcIKpODaqaZOiVEAKeAfMcw8wD4njP01W2Nh27VJD92R1fczAtxoL7tIH5XysOcmN3dqphqvTNQWu47C1Cciki2Yr9o2Ol9Bx42t+gK3o22e3+6I8mM0avonwB4Bx5NA5RjN+g/8AwGCH/bIfqJDYjb+bhQoL/BRRP8InZKnodwZ4VKg+Bmq/oYw/dXceaiBxepjie63kWH5z420Hta+g0nYX9Cqd2JPvT/OYG9CvLEj8H+cDkDYx/aPxnxcU/tt+Izrh9Crf3lfwH9Z5/wDpR/7yv4D+sDk3rb6EMwIPEMb+6eqTk3J1J1JJ1J5mdZX0JnvxPwT/ADm1R9ClMdrE1PuhR+UChbB21TQIldGZEYtTKEZ0JBBBVu0NT33HjfTJvRtv1kClQQpQU9VTa57rm2mguABwBPOdMw3oewY7dSs/m4H+ECWDZu4OAo2yUrnm7Mx+ZgfnfDbv1n7KMfISdwXo7xj8KbAeOk/ReHwFJBZEUeQE2gIHC8F6IcQ3bZF8zf6SdwfodQdut+Ff1M6xEChYT0WYFe1nf3gfSTGG3IwCcKCn+K5lliBH4fY2HTsUaa+SCbqIBwAHkLT3EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP//Z",
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWEhgUFRYYGBIaFRwaGBgZFhwaGBkYGBgZGhoVGBodIDAlHB44HxgZJj0mKy80NTU1HCQ7QDszPy40NTEBDAwMDw8QGBERGDEdGB0xMT8xNDExMT8/Pz8/PzE0MT80PzQxPz8xNDExNDQxNDExMTExMTExMTExMTExMTExMf/AABEIAJMBVwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABGEAACAQIDBAYHBQUFCAMAAAABAgADEQQSIQUGMVETIjJBYXEHFFKBkaGxQoKSwdEVYnKiwjNUsuHwI0NEY2SEo9MWFyT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEx/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBETBisSlNC9R1RBxZiAB7zAzxOdbd9KmGokrRVqrDvPUX6X+IEqzelDaFe4w+GW3MK7gfeBUCB26Y2qqOLAeZE/OmK9JW0CSC1MEGxshOo465jNZ9+9o2DZ7KeB6OwPkeBgfpH1pPbX8Qnz1xPaE/NI34x541R+AT0N9cb7anzT9DA/Snrie0I9bT2197AfWfnGnvzjBxKH7rD6PL9uztSq2E9cxQCU2JFJFY3qAXu/WOi6HXkCeFpR1NayngynyIMyziuP9IdW56LDMUHf0DWtzzML281E08N6UK+lqfuWxN9NAFC9x5yDu0Tkmz/Sut8tVSvPMp/K5+Jl52NvdhsQBlcAnxBF+VxpfwgWKJ5Bvw4T1AREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQETDUrKvaZR5kCULe/bOPdmpYOmyoDbpBUpqW8VzMCBAld7d9qGCBUWqYi2iA2C8jUb7PlxPK2s45tHbWN2jVtcuQdAOrTpg8hwX5sfGbSbl416maql0JJYLWTOxOpu1za54nU/WWnDbMxVNAlLBoqDgPWLe82Q3PiYE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ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP//Z",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="360km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Accessories>

        <About>
          Dasdasdasd dasd asd asdasd asd sadasdasd dasdada dasdasdasd, dasd asd
          asdasd asd sadasdasd dasdada dasdasdasd dasd asd asdasd. Asd sadasdasd
          dasdada dasdasdasd dasd asd asdasd asd sadasdasd dasdada.
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};

export default CarDetails;
