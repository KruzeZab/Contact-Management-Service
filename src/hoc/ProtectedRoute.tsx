interface PrivateRouteProps {
  component: any;
  path?: string;
  exact?: boolean;
}

const ProtectedRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  return <Component {...rest} />;
};

export default ProtectedRoute;
