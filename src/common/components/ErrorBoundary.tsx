/* eslint-disable no-console */
import { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '@/common/types/common.type';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to indicate an error occurred
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error details to an external service or console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // Render fallback UI if provided, otherwise a default message
      return (
        fallback || (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Something went wrong.</h2>
            <p>{error?.message}</p>
          </div>
        )
      );
    }

    return children;
  }
}

export default ErrorBoundary;
