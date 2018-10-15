import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  listQuestion,
  saveResult,
  askAccept,
} from '../../../reducers/reducer.question';
import { setPopupHeaderMessage } from '../../../reducers/reducer.popup';
import dataConfig from '../../../dataConfig';

// Components
import Loadable from '../../../loadable';
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './Survey.styled';

class Survey extends React.Component {
  state = {
    popupFilter: false,
    destination: '/',
  };

  componentDidMount() {
    const { getListQuestion } = this.props;
    getListQuestion();
  }

  async onSubmit(payload) {
    const { save, ask } = this.props;

    await save(payload);
    await ask(payload);

    const { isAccepted, setPopup } = this.props;
    if (isAccepted) {
      setPopup(dataConfig.popupMessage.accepted);
      this.setState({ destination: '/add-info' });
    } else {
      setPopup(dataConfig.popupMessage.denied);
    }
    this.setState({ popupFilter: true });
  }

  renderQuestionItems() {
    const { questionItems } = this.props;
    return _.map(questionItems, (item) => {
      const index = _.findIndex(questionItems, o => o.id === item.id) + 1;
      return (
        <Styled.QuestionItem key={item.id}>
          <fieldset style={{ border: 'none' }}>
            <legend>{`${index}. ${item.title}`}</legend>
            {_.map(item.selection_items, selection => (
              <Styled.SelectionItem key={selection.id}>
                <label htmlFor={`question-${item.id}`}>
                  <Field
                    name={`question-${item.id}`}
                    component="input"
                    type="radio"
                    value={`selection-${selection.id}`}
                    required
                  />
                  <Styled.SelectionText>
                    {selection.select}
                  </Styled.SelectionText>
                </label>
              </Styled.SelectionItem>
            ))}
          </fieldset>
        </Styled.QuestionItem>
      );
    });
  }

  render() {
    const { popupFilter, destination } = this.state;
    const { handleSubmit, history } = this.props;
    return (
      <Styled.ScrollFlexWrapper>
        <Helmet pageTitle="Survey" />
        <Wrapper.ColumnWrapper>
          <Styled.MarginForm
            action="post"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            {this.renderQuestionItems()}
            <Styled.AlignRightButton type="submit">
              Submit
            </Styled.AlignRightButton>
          </Styled.MarginForm>
        </Wrapper.ColumnWrapper>
        {popupFilter && (
          <Loadable.SimplePopup
            replace={history.replace}
            destination={destination}
          />
        )}
      </Styled.ScrollFlexWrapper>
    );
  }
}

Survey.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getListQuestion: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  ask: PropTypes.func.isRequired,
  setPopup: PropTypes.func.isRequired,
  questionItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  questionItems: state.question.items,
  isAccepted: state.question.isAccepted,
});

const mapDispatchToProps = dispatch => ({
  getListQuestion: () => dispatch(listQuestion()),
  save: payload => dispatch(saveResult(payload)),
  ask: payload => dispatch(askAccept(payload)),
  setPopup: payload => dispatch(setPopupHeaderMessage(payload)),
});

export default reduxForm({
  form: 'SelectSurveyForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Survey),
);
