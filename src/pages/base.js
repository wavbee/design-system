import { Prism } from '@mantine/prism';
import PropTypes from 'prop-types';
import { BoxContainer } from '../components/containers';

const paragraph = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {' '}
    Morbi non erat sed mauris rutrum dictum.
    {' '}
    <b>Bold text here.</b>
    {' '}
    Mauris sit amet magna vel sem consequat viverra ac vel turpis.
  </p>
);

const TypoPrinter = ({ text, code }) => (
  <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-6 lg:max-w-none lg:grid-cols-2 border-2 border-slate-100">
    <div className="flex flex-col overflow-hidden p-2 my-auto">
      {text}
    </div>
    <div className="flex flex-col overflow-hidden w-full p-2 my-auto">
      <Prism colorScheme="dark" language="jsx" className="max-w-lg">
        {code}
      </Prism>
    </div>
  </div>
);

const Base = () => (
  <BoxContainer>
    <>
      <TypoPrinter text={<h1>Heading 1</h1>} code={'<h1>Heading 1</h1>  or  <span className="h2">Heading 1</span>'} />
      <TypoPrinter text={<h2>Heading 2</h2>} code={'<h2>Heading 2</h2>  or  <span className="h2">Heading 2</span>'} />
      <TypoPrinter text={<h3>Heading 3</h3>} code={'<h3>Heading 3</h3>  or  <span className="h3">Heading 3</span>'} />
      <TypoPrinter text={<h4>Heading 4</h4>} code={'<h4>Heading 4</h4>  or  <span className="h4">Heading 4</span>'} />
      <TypoPrinter text={<h5>Heading 5</h5>} code={'<h5>Heading 5</h5>  or  <span className="h5">Heading 4</span>'} />
      <TypoPrinter text={<h6>Heading 6</h6>} code={'<h6>Heading 6</h6>  or  <span className="h6">Heading 6</span>'} />
      <TypoPrinter text={paragraph} code={'<p> Lorem ipsum</p>\n<b>Bold text here.</b>'} />
    </>
  </BoxContainer>
);

TypoPrinter.propTypes = {
  text: PropTypes.oneOfType([PropTypes.object]).isRequired,
  code: PropTypes.string.isRequired,
};

export default Base;
