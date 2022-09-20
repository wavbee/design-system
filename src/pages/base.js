import { Prism } from '@mantine/prism';
import { BoxContainer } from '../components/containers';

const Base = () => (
  <BoxContainer>
    <>
      <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-6 lg:max-w-none lg:grid-cols-2 border-2 border-slate-100">
        <div className="flex flex-col overflow-hidden p-2 my-auto">
          <h1>Heading 1</h1>
        </div>
        <div className="flex flex-col overflow-hidden w-full p-2 my-auto">
          <Prism colorScheme="dark" language="jsx" className="max-w-lg">
            {'<h1>Heading 1</h1>  or  <span className="h2">Heading 1</span>'}
          </Prism>
        </div>
      </div>
      <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-6 lg:max-w-none lg:grid-cols-2 border-2 border-slate-100">
        <div className="flex flex-col overflow-hidden p-2 my-auto">
          <h2>Heading 2</h2>
        </div>
        <div className="flex flex-col overflow-hidden p-2 my-auto w-full">
          <Prism colorScheme="dark" language="jsx" className=" max-w-lg">
            {'<h2>Heading 2</h2>  or  <span className="h2">Heading 2</span>'}
          </Prism>
        </div>
      </div>
      <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-6 lg:max-w-none lg:grid-cols-2 border-2 border-slate-100">
        <div className="flex flex-col overflow-hidden p-2 my-auto">
          <h2>Heading 3</h2>
        </div>
        <div className="flex flex-col overflow-hidden p-2 my-auto w-full">
          <Prism colorScheme="dark" language="jsx" className="max-w-lg">
            {'<h3>Heading 3</h3>  or  <span className="h3">Heading 3</span>'}
          </Prism>
        </div>
      </div>
    </>
  </BoxContainer>
);

export default Base;
