import React from "react";
import { Feather } from "@expo/vector-icons";
import { ptBr } from './localeConfig'
import { generateInterval } from './generateInterval';
import { 
    Calendar as CustomCalendar,
    DateCallbackHandler,
    LocaleConfig
} from "react-native-calendars";
import { useTheme } from "styled-components";

LocaleConfig.locales['pt-br'] = ptBr;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDataProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  },
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface CalendarProps {
  markedDates: MarkedDataProps;
  onDayPress: DateCallbackHandler;
}

const Calendar: React.FC<CalendarProps> = ({markedDates, onDayPress}) => {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.shape}
          name={direction == "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 4,
        marginBottom: 4,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_500,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={0}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
};

export { Calendar, MarkedDataProps, DayProps, generateInterval };
