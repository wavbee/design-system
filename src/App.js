import { Prism } from '@mantine/prism';
import { BoxContainer, FullContainer } from './components/containers';
import Navbar from './components/navbar';

const FullContainerCode = `
import { FullContainer } from './components/containers';

<FullContainer className="your-custom-classes">
    /* ...code*/
</FullContainer>
`;

const BoxContainerCode = `
import { BoxContainer } from './components/containers';

<BoxContainer className="your-custom-classes">
    /* ...code*/
</BoxContainer>
`;

export default function App() {
  return (
    <>
      <Navbar />
      <FullContainer className="text-white border-solid border-2 border-sky-500">
        <div className="w-full h-80 bg-teal-600 p-10 m-auto ">
          <h3 className="w-full text-center text-2xl p-8">Full Width Container </h3>
          <Prism colorScheme="dark" language="jsx" className="max-w-lg mx-auto">
            {FullContainerCode}
          </Prism>
        </div>
      </FullContainer>
      <BoxContainer className="text-white border-solid border-2 border-sky-500 mt-8">
        <div className="w-full h-80 bg-violet-600 p-10 m-auto ">
          <h3 className="w-full text-center text-2xl p-8">Boxed Container </h3>
          <Prism colorScheme="dark" language="jsx" className="max-w-lg mx-auto">
            {BoxContainerCode}
          </Prism>
        </div>
      </BoxContainer>
    </>
  );
}
