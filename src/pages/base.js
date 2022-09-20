import { Prism } from '@mantine/prism';
import { BoxContainer } from '../components/containers';

const Base = () => (
  <BoxContainer>
    <>
      <h1>Heading 1</h1>
      <Prism colorScheme="dark" language="jsx" className="max-w-lg">
        {'<h1>Heading 1</h1>\nor\n<span className="h2">Heading 1</span>'}
      </Prism>
      <h2>Heading 2</h2>
      <Prism colorScheme="dark" language="jsx" className="max-w-lg">
        {'<h2>Heading 2</h2>\nor\n<span className="h2">Heading 2</span>'}
      </Prism>
      <h3>Heading 3</h3>
      <Prism colorScheme="dark" language="jsx" className="max-w-lg">
        {'<h3>Heading 3</h3>\nor\n<span className="h3">Heading 3</span>'}
      </Prism>
    </>
  </BoxContainer>
);

export default Base;
