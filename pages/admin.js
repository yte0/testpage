import dynamic from "next/dynamic";


class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
    } = this.props;

    return (
      <input
        style={{ backgroundColor: "lightcyan" }}
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
}

function Preview({ value }) {
  return <div style={{ backgroundColor: "lightcyan" }}>{value}</div>;
}

const AdminWithNoSSR = dynamic(
  () =>
    import("netlify-cms-app").then((CMS) => {
      CMS.init();
      CMS.registerWidget('mywigdet', Control, Preview)
    }),
  { ssr: false });

export default AdminWithNoSSR;