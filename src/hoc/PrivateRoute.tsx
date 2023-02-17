interface PrivateRouteProps {
  component: any;
  exact?: boolean;
}

const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  return <Component {...rest} />;
};

export default PrivateRoute;
