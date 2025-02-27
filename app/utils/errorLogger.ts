// Error logging utility for Next.js that works well with Cursor
// Provides consistent formatting and clickable file references

type ErrorLevel = 'error' | 'warn' | 'info' | 'debug';

interface ErrorOptions {
  component?: string;
  context?: Record<string, unknown>;
  showStack?: boolean;
}

/**
 * Logger utility that formats errors for better visibility in Cursor console
 */
export const logger = {
  /**
   * Log an error with consistent formatting
   */
  error: (message: string, error?: Error | unknown, options?: ErrorOptions) => {
    logMessage('error', message, error, options);
  },
  
  /**
   * Log a warning with consistent formatting
   */
  warn: (message: string, error?: Error | unknown, options?: ErrorOptions) => {
    logMessage('warn', message, error, options);
  },
  
  /**
   * Log info with consistent formatting
   */
  info: (message: string, data?: unknown, options?: ErrorOptions) => {
    logMessage('info', message, data, options);
  },
  
  /**
   * Log debug information (only in development)
   */
  debug: (message: string, data?: unknown, options?: ErrorOptions) => {
    if (process.env.NODE_ENV === 'development') {
      logMessage('debug', message, data, options);
    }
  }
};

/**
 * Internal function to handle consistent log formatting
 */
function logMessage(
  level: ErrorLevel,
  message: string,
  errorOrData?: Error | unknown,
  options?: ErrorOptions
) {
  const component = options?.component ? `[${options.component}] ` : '';
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] ${level.toUpperCase()} ${component}`;
  
  // Main message
  console[level](`${prefix}${message}`);
  
  // Log error details if provided
  if (errorOrData instanceof Error) {
    console[level](`${prefix}Error: ${errorOrData.message}`);
    
    // Show stack trace - makes it clickable in Cursor
    if (options?.showStack !== false) {
      console[level](`${prefix}Stack: ${errorOrData.stack}`);
    }
  } else if (errorOrData !== undefined) {
    console[level](`${prefix}Data:`, errorOrData);
  }
  
  // Additional context if provided
  if (options?.context) {
    console[level](`${prefix}Context:`, options.context);
  }
}

/**
 * Global error handler for client-side errors
 */
export function setupGlobalErrorHandler() {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      logger.error('Unhandled error', event.error, { 
        context: { 
          message: event.message,
          filename: event.filename,
          lineNo: event.lineno,
          colNo: event.colno
        }
      });
    });
    
    window.addEventListener('unhandledrejection', (event) => {
      logger.error('Unhandled promise rejection', event.reason, {
        context: { promise: event.promise }
      });
    });
  }
}