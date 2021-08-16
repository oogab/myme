import styled from 'styled-components';
import CustomCard from '../CustomCard';
const Wrapper = styled(CustomCard)`
    height:460.41px;
    .progress-header{
        border-bottom: 2px solid #666666;
        height:49px;
        line-height:49px;
    }
    .content{
        height: 354px;
        overflow: auto;
    }
    .no-routine{
        padding:10px;
    }
`;
export default Wrapper;