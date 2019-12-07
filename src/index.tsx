import React from "react";

interface Props {
  children: any;
  /*
    A callback that renders custom JSX content when an error occurs.
  */
  renderOnError?: any;
}

const initialState = {
  hasError: false
};

/**
 * Wrapper component that catches JavaScript errors anywhere in its child 
 * component tree, log those errors, and display a fallback UI instead of 
 * the component tree that crashed. Error boundaries catch errors during 
 * rendering, in lifecycle methods, and in constructors of the whole tree 
 * below them.
 */
export default class ErrorBoundary extends React.Component<
  Props,
  typeof initialState
> {
  public readonly state = initialState;

  /**
   * Creates an error boundary
   * @param props.children {JSX} Renders nested content.
   * @param props.renderOnError {JSX} Renders custom content on error.
   */
  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(_error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { renderOnError, children } = this.props;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return typeof renderOnError === "function" ? (
        renderOnError()
      ) : (
        <h1>Something went wrong.</h1>
      );
    }

    return children;
  }
}
