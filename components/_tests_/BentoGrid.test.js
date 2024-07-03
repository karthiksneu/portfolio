import { render, screen } from '@testing-library/react';
// import { BentoGrid, BentoGridItem } from '../components/BentoGrid';
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid'

// Mocking child components
jest.mock('../ui/BackgroundGradientAnimation', () => ({
  BackgroundGradientAnimation: ({ children }) => <div>{children}</div>,
}));

jest.mock('../ui/GridGlobe', () => ({
  GlobeDemo: () => <div>GlobeDemo</div>,
}));

describe('BentoGrid', () => {
  it('renders the BentoGrid component with children', () => {
    render(
      <BentoGrid>
        <div>Child Component</div>
      </BentoGrid>
    );

    const childElement = screen.getByText('Child Component');
    expect(childElement).toBeInTheDocument();
  });

  it('renders a BentoGridItem component', () => {
    render(
      <BentoGrid>
        <BentoGridItem
          id={1}
          title="Test Title"
          description="Test Description"
        />
      </BentoGrid>
    );

    const titleElement = screen.getByText('Test Title');
    const descriptionElement = screen.getByText('Test Description');
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the image in BentoGridItem if img is provided', () => {
    render(
      <BentoGrid>
        <BentoGridItem
          id={1}
          title="Test Title"
          description="Test Description"
          img="/test-img.jpg"
        />
      </BentoGrid>
    );

    const imgElement = screen.getByAltText('/test-img.jpg');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveClass('object-cover object-center');
  });

  it('renders the GlobeDemo component when id is 2', () => {
    render(
      <BentoGrid>
        <BentoGridItem
          id={2}
          title="Test Title"
          description="Test Description"
        />
      </BentoGrid>
    );

    const globeDemoElement = screen.getByText('GlobeDemo');
    expect(globeDemoElement).toBeInTheDocument();
  });

  it('renders the tech stack when id is 3', () => {
    render(
      <BentoGrid>
        <BentoGridItem
          id={3}
          title="Test Title"
          description="Test Description"
        />
      </BentoGrid>
    );

    const techStackElements = ['React.js', 'Next.js', 'TypeScript', 'Java', 'Python', 'AWS'].map((tech) =>
      screen.getByText(tech)
    );
    techStackElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
